import crypto from 'crypto';
import { Response } from 'express';
import HTTPStatuses from 'http-status-codes';
import JWT from 'jsonwebtoken';

import Passenger from 'server/models/passenger/passenger';
import { IPassengerAddRequest } from 'common/types/passenger/add';
import config from 'server/config';
import { ONE_WEEK_IN_SECONDS } from 'common/consts/times';

export default async (req: IPassengerAddRequest, res: Response) => {
  try {
    let token;
    const { email, avatar, bio, firstName, lastName, location, password, payment, tel } = req.body;
    const newPassenger = new Passenger();

    newPassenger.email = email;
    newPassenger.avatar = avatar;
    newPassenger.bio = bio;
    newPassenger.firstName = firstName;
    newPassenger.lastName = lastName;
    newPassenger.password = password;
    newPassenger.payment = payment;
    newPassenger.tel = tel;
    newPassenger.location = location;

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
    newPassenger.avatar = `https://www.gravatar.com/avatar/${emailHash}?s=140`;

    await newPassenger.save().then(async () => {
      await newPassenger.sendSignUpMail();
    });

    /**
     * If JWT Secret specified in .env – sign
     */
    if (config.jwt.secret) {
      token = JWT.sign(newPassenger.toJSON(), config.jwt.secret, {
        expiresIn: ONE_WEEK_IN_SECONDS,
      });
    } else {
      throw new Error('JWT secret is not found');
    }

    return res.status(HTTPStatuses.CREATED).json({
      success: true,
      token,
      message: 'Passenger created',
    });
  } catch (error) {
    return res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};
