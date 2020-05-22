import { IUserSchema } from 'common/types/user/user-schema';
import { Request } from 'express';

export interface IAuthSignInResponseBody {
  success: boolean;
  message?: string;
  token?: string;
}

export interface IAuthSignInValidatorResponseBody {
  success: boolean;
  message: string;
}

export interface IAuthSignInValidatorRequest extends Request {
  user: IUserSchema;
}
