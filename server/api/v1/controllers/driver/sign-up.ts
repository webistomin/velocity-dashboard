import { Response } from 'express';
import HTTPStatuses from 'http-status-codes';
import JWT from 'jsonwebtoken';
import { nanoid } from 'nanoid';

import Driver from 'server/models/driver/driver';
import { IDriverSignUpRequest, IDriverSignUpResponse } from 'common/types/driver/sign-up';
import config from 'server/config';
import { ONE_WEEK_IN_SECONDS } from 'common/consts/times';
import { DUPLICATE_RECORD_ERROR } from 'common/consts/mongoose-errors';
import { generateMd5Hash } from 'server/utils/generate-md5-hash';
import { getGravatarUrl } from 'server/utils/getGravatarUrl';

export default async (req: IDriverSignUpRequest, res: Response<IDriverSignUpResponse>) => {
  try {
    let token;
    const { email, avatar, bio, firstName, lastName, location, password, tel, car } = req.body;
    const newDriver = new Driver();

    newDriver.email = email;
    newDriver.avatar = avatar;
    newDriver.bio = bio;
    newDriver.firstName = firstName;
    newDriver.lastName = lastName;
    newDriver.password = password;
    newDriver.car = { ...car, id: nanoid() };
    newDriver.tel = tel;
    newDriver.location = location;

    /**
     * Generate md5 email hash
     */
    const emailHash = generateMd5Hash(email);

    /**
     * Add gravatar avatar
     */
    newDriver.avatar = getGravatarUrl(emailHash);

    await newDriver.save().then(async () => {
      await newDriver.sendSignUpMail();
    });

    /**
     * If JWT Secret specified in .env – sign
     */
    if (config.jwt.secret) {
      token = JWT.sign(newDriver.toJSON(), config.jwt.secret, {
        expiresIn: ONE_WEEK_IN_SECONDS,
      });
    } else {
      throw new Error('JWT secret is not found');
    }

    return res.status(HTTPStatuses.CREATED).json({
      success: true,
      token,
      message: 'Driver created',
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
