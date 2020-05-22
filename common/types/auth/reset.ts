import { IUserSchema } from 'common/types/user/user-schema';
import { Request } from 'express';

export interface IAuthPasswordResetSchema {
  email: string;
  token: string;
  createdAt: Date;
}

export interface IAuthPasswordResetValidatorRequest extends Request {
  user: IUserSchema;
}

export interface IAuthPasswordResetResponseBody {
  success: boolean;
  message: string;
}
