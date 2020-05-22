import { Response } from 'express';
import HTTPStatuses from 'http-status-codes';
import bcrypt from 'bcrypt';

import User from 'server/models/user/user';
import PasswordReset from 'server/models/auth/password-reset';
import { IAuthPasswordResetResponseBody, IAuthPasswordResetValidatorRequest } from 'common/types/auth/reset';

export default async (req: IAuthPasswordResetValidatorRequest, res: Response<IAuthPasswordResetResponseBody>) => {
  const { user } = req;

  try {
    /**
     * Generate the hash like it did in User model
     */
    await bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        throw new Error(err.message);
      }

      bcrypt.hash(req.body.password, salt, async (err, hash) => {
        if (err) {
          throw new Error(err.message);
        }

        /**
         * Update user password with hash
         */
        await User.findOneAndUpdate(
          {
            email: user.email,
          },
          {
            password: hash,
          }
        );
      });
    });

    /**
     * Delete password reset link
     */
    await PasswordReset.findOneAndDelete({ email: user.email });

    return res.json({
      success: true,
      message: 'Password has been successfully reset',
    });
  } catch (error) {
    return res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};
