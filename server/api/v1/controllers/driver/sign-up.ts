import crypto from 'crypto';
import { Response } from 'express';
import HTTPStatuses from 'http-status-codes';
import JWT from 'jsonwebtoken';

import Driver from 'server/models/driver/driver';
import { IDriverSignUpRequest } from 'common/types/driver/sign-up';
import config from 'server/config';
import { ONE_WEEK_IN_SECONDS } from 'common/consts/times';
import { nanoid } from 'nanoid';

export default async (req: IDriverSignUpRequest, res: Response) => {
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
    newDriver.car = { id: nanoid(), ...car };
    newDriver.tel = tel;
    newDriver.location = location;

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
    newDriver.avatar = `https://www.gravatar.com/avatar/${emailHash}?s=140`;

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
    return res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};
