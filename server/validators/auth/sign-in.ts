import * as Yup from 'yup';
import HTTPStatuses from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import { IAuthSignInValidatorResponseBody } from 'common/types/auth/sign-in';

const SignInSchema = Yup.object({
  email: Yup.string()
    .required()
    .email(),
  password: Yup.string().required(),
});

export default (req: Request, res: Response<IAuthSignInValidatorResponseBody>, next: NextFunction) => {
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
