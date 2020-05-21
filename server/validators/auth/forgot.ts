import * as Yup from 'yup';
import HTTPStatuses from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import { IAuthForgotValidatorResponseBody } from 'common/types/auth/forgot';

const ForgotSchema = Yup.object({
  email: Yup.string()
    .required()
    .email(),
});

export default (req: Request, res: Response<IAuthForgotValidatorResponseBody>, next: NextFunction) => {
  const data = req.body;
  return ForgotSchema.validate(data)
    .then(() => {
      return next();
    })
    .catch((error: Yup.ValidationError) => {
      return res.status(HTTPStatuses.UNPROCESSABLE_ENTITY).json({
        success: false,
        message: error.message,
      });
    });
};
