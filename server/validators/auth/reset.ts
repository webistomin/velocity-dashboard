import * as Yup from 'yup';
import HTTPStatuses from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import PasswordReset from 'server/models/auth/password-reset';
import User from 'server/models/user/user';

const ResetSchema = Yup.object({
  password: Yup.string().required(),
  token: Yup.string().required(),
});

export default async (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.body;

  try {
    await ResetSchema.validate(req.body);
    const existingReset = await PasswordReset.findOne({ token });

    if (!existingReset) {
      throw new Yup.ValidationError('Invalid reset token', req.body, 'password');
    }

    const user = await User.findOne({ email: existingReset.email });
    // @ts-ignore
    req.user = user;
    return next();
  } catch (error) {
    res.status(HTTPStatuses.UNPROCESSABLE_ENTITY).json({
      success: false,
      message: error.message,
    });
  }
};
