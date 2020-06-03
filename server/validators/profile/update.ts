import * as Yup from 'yup';
import HTTPStatuses from 'http-status-codes';
import { NextFunction, Response } from 'express';

import User from 'server/models/user/user';
import { IProfileUpdateRequest, IProfileUpdateResponseBody } from 'common/types/profile/update';

const UpdateProfileSchema = Yup.object({
  info: Yup.object({
    email: Yup.string().required().email(),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    dob: Yup.string(),
    currentPassword: Yup.string(),
    newPassword: Yup.string(),
    confirmPassword: Yup.mixed().test('match', 'Passwords do not match', function () {
      return this.parent.newPassword === this.parent.confirmPassword;
    }),
    bio: Yup.string(),
  }),
  notifications: Yup.object({
    isEmailNotificationsEnabled: Yup.boolean(),
    isPushNotificationsEnabled: Yup.boolean(),
    isMonthlyNotificationsEnabled: Yup.boolean(),
    isQuarterNotificationsEnabled: Yup.boolean(),
  }),
  theme: Yup.string(),
});

export default async (req: IProfileUpdateRequest, res: Response<IProfileUpdateResponseBody>, next: NextFunction) => {
  const body = req.body;

  try {
    /**
     * Validate body with Yup
     */
    await UpdateProfileSchema.validate(body);
    /**
     * Find user with this email in users collection
     */
    const foundUser = await User.findOne({ email: body.info.email });

    /**
     * If user is not found – return error
     */
    if (!foundUser) {
      return await res.status(HTTPStatuses.UNAUTHORIZED).json({
        success: false,
        message: 'Account does not exist',
      });
    }

    /**
     * If user want to change password
     */
    if (body.info.newPassword) {
      /**
       * Check password equality
       */
      const isPasswordsEqual = await foundUser.comparePassword(body.info.currentPassword);

      if (!isPasswordsEqual) {
        return res.status(HTTPStatuses.UNPROCESSABLE_ENTITY).json({
          success: false,
          message: 'Invalid current password',
        });
      }

      req.shouldUpdatePassword = true;
    }

    req.foundUser = foundUser;
    return next();
  } catch (error) {
    return res.status(HTTPStatuses.UNPROCESSABLE_ENTITY).json({
      success: false,
      message: error.message,
    });
  }
};
