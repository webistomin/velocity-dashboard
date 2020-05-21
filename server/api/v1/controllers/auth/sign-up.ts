import { Request, Response } from 'express';
import HTTPStatuses from 'http-status-codes';
import JWT from 'jsonwebtoken';
import User from 'server/models/user';
import config from 'server/config';
import { WEEK } from 'common/consts/times';
import { DUPLICATE_RECORD_ERROR } from 'common/consts/mongoose-errors';
import { IAuthSignUpResponseBody } from 'common/types/auth/sign-up';

export default async (req: Request, res: Response<IAuthSignUpResponseBody>) => {
  try {
    let token;
    const { firstName, lastName, role, email, password } = req.body;
    const newUser = new User();
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.role = role;
    newUser.email = email;
    newUser.password = password;
    await newUser.save();

    if (config.jwt.secret) {
      token = JWT.sign(newUser.toJSON(), config.jwt.secret, {
        expiresIn: WEEK,
      });
    }

    await res.status(HTTPStatuses.CREATED).json({
      success: true,
      token,
      message: 'User created',
    });
  } catch (e) {
    const code = e.code;
    let status = HTTPStatuses.INTERNAL_SERVER_ERROR;
    const response = {
      success: false,
      message: e.message,
    };

    if (code === DUPLICATE_RECORD_ERROR) {
      status = HTTPStatuses.CONFLICT;
      response.message = 'Email address already registered';
    }

    await res.status(status).json(response);
  }
};
