import { Response } from 'express';
import HTTPStatuses from 'http-status-codes';
import JWT from 'jsonwebtoken';

import config from 'server/config';
import { ONE_WEEK_IN_SECONDS } from 'common/consts/times';
import { IAuthSignInResponseBody, IAuthSignInValidatorRequest } from 'common/types/auth/sign-in';

export default async (req: IAuthSignInValidatorRequest, res: Response<IAuthSignInResponseBody>) => {
  try {
    const { user } = req;
    const JWTSecret = config.jwt.secret;

    /**
     * If JWT Secret is not specified in .env – return error
     */
    if (!JWTSecret) {
      throw new Error('JWT secret is not found');
    } else {
      /**
       * Sign user token and return to front-end
       */
      const token = JWT.sign(user.toJSON(), JWTSecret, {
        expiresIn: ONE_WEEK_IN_SECONDS,
      });

      await res.json({
        success: true,
        token,
      });
    }
  } catch (error) {
    return res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};
