import crypto from 'crypto';
import { Request, Response } from 'express';
import HTTPStatuses from 'http-status-codes';
import JWT from 'jsonwebtoken';

import User from 'server/models/user/user';
import config from 'server/config';
import { ONE_WEEK_IN_SECONDS } from 'common/consts/times';
import { DUPLICATE_RECORD_ERROR } from 'common/consts/mongoose-errors';
import { IAuthSignUpResponseBody } from 'common/types/auth/sign-up';

export default async (req: Request, res: Response<IAuthSignUpResponseBody>) => {
  try {
    let token;
    const { firstName, lastName, role, email, password } = req.body;

    /**
     * Create new user
     */
    const newUser = new User();
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.role = role;
    newUser.email = email;
    newUser.password = password;

    /**
     * Generate md5 email hash
     */
    const emailHash = crypto
      .createHash('md5')
      .update(email)
      .digest('hex');

    /**
     * Add gravatar avatar
     */
    newUser.avatar = `https://www.gravatar.com/avatar/${emailHash}?s=140`;

    await newUser.save().then(async () => {
      await newUser.sendSignUpMail();
    });

    /**
     * If JWT Secret specified in .env – sign
     */
    if (config.jwt.secret) {
      token = JWT.sign(newUser.toJSON(), config.jwt.secret, {
        expiresIn: ONE_WEEK_IN_SECONDS,
      });
    } else {
      throw new Error('JWT secret is not found');
    }

    return res.status(HTTPStatuses.CREATED).json({
      success: true,
      token,
      message: 'User created',
    });
  } catch (error) {
    const code = error.code;
    let status = HTTPStatuses.INTERNAL_SERVER_ERROR;
    const response = {
      success: false,
      message: error.message,
    };

    /**
     * If user with this email already exists – return error
     */
    if (code === DUPLICATE_RECORD_ERROR) {
      status = HTTPStatuses.CONFLICT;
      response.message = 'Email address already registered';
    }

    return res.status(status).json(response);
  }
};
