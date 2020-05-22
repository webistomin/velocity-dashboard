import { Response } from 'express';
import HTTPStatuses from 'http-status-codes';
import JWT from 'jsonwebtoken';

import config from 'server/config';
import { WEEK } from 'common/consts/times';
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
        expiresIn: WEEK,
      });

      await res.json({
        success: true,
        token,
      });
    }
  } catch (e) {
    await res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: e.message,
    });
  }
};
