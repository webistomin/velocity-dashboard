import * as Yup from 'yup';
import HTTPStatuses from 'http-status-codes';
import { NextFunction, Response } from 'express';

import { IAuthSignInValidatorRequest, IAuthSignInValidatorResponseBody } from 'common/types/auth/sign-in';
import User from 'server/models/user/user';

const SignInSchema = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});

export default async (
  req: IAuthSignInValidatorRequest,
  res: Response<IAuthSignInValidatorResponseBody>,
  next: NextFunction
) => {
  const { email, password } = req.body;

  try {
    /**
     * Validate body with Yup
     */
    await SignInSchema.validate({ email, password });

    /**
     * Find user with this email in users collection
     */
    const foundUser = await User.findOne({ email });

    /**
     * If user is not found – return error
     */
    if (!foundUser) {
      return await res.status(HTTPStatuses.UNAUTHORIZED).json({
        success: false,
        message: 'Account does not exist',
      });
    } else {
      /**
       * Check password equality
       */
      const isPasswordsEqual = await foundUser.comparePassword(password);

      /**
       * If passwords are not equal – return error
       */
      if (!isPasswordsEqual) {
        return res.status(HTTPStatuses.UNAUTHORIZED).json({
          success: false,
          message: 'Wrong email or password, please try again',
        });
      }
      /**
       * Pass user object to sign-in controller
       */
      req.user = foundUser;
      return next();
    }
  } catch (error) {
    return res.status(HTTPStatuses.UNPROCESSABLE_ENTITY).json({
      success: false,
      message: error.message,
    });
  }
};
