import * as Yup from 'yup';
import HTTPStatuses from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';

import { IAuthSignUpValidatorResponseBody } from 'common/types/auth/sign-up';
import { SiteThemes } from 'common/types/theme/site-themes';

const SignUpSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  role: Yup.string().required(),
  email: Yup.string().required().email(),
  password: Yup.string().required(),
  theme: Yup.string().oneOf([
    SiteThemes.SHELOB,
    SiteThemes.SHADOWFAX,
    SiteThemes.DENETHOR,
    SiteThemes.GRIMA,
    SiteThemes.QUICKBEAM,
  ]),
  notifications: Yup.object({
    isEmailNotificationsEnabled: Yup.boolean(),
    isPushNotificationsEnabled: Yup.boolean(),
    isMonthlyNotificationsEnabled: Yup.boolean(),
    isQuarterNotificationsEnabled: Yup.boolean(),
  }),
  phone: Yup.string(),
  socials: Yup.object({
    twitter: Yup.string(),
  }),
  location: Yup.string(),
  bio: Yup.string(),
  dob: Yup.string(),
});

export default async (req: Request, res: Response<IAuthSignUpValidatorResponseBody>, next: NextFunction) => {
  const data = req.body;

  try {
    /**
     * Validate body with Yup
     */
    await SignUpSchema.validate(data);
    return next();
  } catch (error) {
    return res.status(HTTPStatuses.UNPROCESSABLE_ENTITY).json({
      success: false,
      message: error.message,
    });
  }
};
