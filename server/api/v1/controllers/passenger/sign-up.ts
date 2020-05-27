import { Response } from 'express';
import HTTPStatuses from 'http-status-codes';
import JWT from 'jsonwebtoken';

import Passenger from 'server/models/passenger/passenger';
import { IPassengerSignUpRequest, IPassengerSignUpResponse } from 'common/types/passenger/sign-up';
import config from 'server/config';
import { ONE_WEEK_IN_SECONDS } from 'common/consts/times';
import { DUPLICATE_RECORD_ERROR } from 'common/consts/mongoose-errors';
import { generateMd5Hash } from 'server/utils/generate-md5-hash';
import { getGravatarUrl } from 'server/utils/getGravatarUrl';

export default async (req: IPassengerSignUpRequest, res: Response<IPassengerSignUpResponse>) => {
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
    const emailHash = generateMd5Hash(email);

    /**
     * Add gravatar avatar
     */
    newPassenger.avatar = getGravatarUrl(emailHash);

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
