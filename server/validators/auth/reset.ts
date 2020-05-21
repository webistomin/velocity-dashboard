import * as Yup from 'yup';
import HTTPStatuses from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import { IAuthResetValidatorResponseBody } from 'common/types/auth/reset';

const SignInSchema = Yup.object({
  email: Yup.string()
    .required()
    .email(),
});

export default (req: Request, res: Response<IAuthResetValidatorResponseBody>, next: NextFunction) => {
  const data = req.body;
  return SignInSchema.validate(data)
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
