import { Request } from 'express';
import { IUserSchema } from 'common/types/user/user-schema';

export interface IAuthForgotResponseBody {
  success: boolean;
  message?: string;
}

export interface IAuthForgotValidatorResponseBody {
  success: boolean;
  message: string;
}

export interface IAuthForgotValidatorRequest extends Request {
  user: IUserSchema;
}
