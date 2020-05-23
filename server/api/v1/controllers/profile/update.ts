import { Response } from 'express';
import HTTPStatuses from 'http-status-codes';
import bcrypt from 'bcrypt';

import { IProfileUpdateRequest, IProfileUpdateResponseBody } from 'common/types/profile/update';
import User from 'server/models/user/user';
import config from 'server/config';
import JWT from 'jsonwebtoken';
import { ONE_WEEK_IN_SECONDS } from 'common/consts/times';

export default async (req: IProfileUpdateRequest, res: Response<IProfileUpdateResponseBody>) => {
  try {
    const { info: userInfo, notifications: userNotifications, theme: userTheme } = req.body;
    const { shouldUpdatePassword, foundUser } = req;
    let newPassword = '';
    let newToken = null;

    if (shouldUpdatePassword) {
      /**
       * Generate the hash like it did in User model
       */
      await new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
          if (err) {
            reject(err);
            throw new Error(err.message);
          }

          bcrypt.hash(userInfo.newPassword, salt, (err, hash) => {
            if (err) {
              reject(err);
              throw new Error(err.message);
            }

            /**
             * Save new password hash
             */
            newPassword = hash;
            resolve();
          });
        });
      });
    }

    const newUser = await User.findOneAndUpdate(
      { email: userInfo.email },
      {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        dob: userInfo.dob,
        bio: userInfo.bio,
        location: userInfo.location,
        notifications: userNotifications,
        theme: userTheme,
        password: newPassword || foundUser.password,
      }
    );

    if (shouldUpdatePassword && newUser) {
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
        const token = JWT.sign(newUser.toJSON(), JWTSecret, {
          expiresIn: ONE_WEEK_IN_SECONDS,
        });

        newToken = token;
      }
    }

    return res.json({
      success: true,
      message: 'Profile successfully updated',
      token: newToken,
    });
  } catch (error) {
    return res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};
