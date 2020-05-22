import { IUserSchema } from 'common/types/user/user-schema';
import { Request } from 'express';
import { Document, Types } from 'mongoose';

export interface IAuthPasswordReset extends Document {
  email: string;
  token: string;
  createdAt: Date;
}

export interface IAuthPasswordResetSchema extends IAuthPasswordReset {
  __v: number;
  _id: Types.ObjectId;
}

export interface IAuthPasswordResetValidatorRequest extends Request {
  user: IUserSchema;
}

export interface IAuthPasswordResetResponseBody {
  success: boolean;
  message: string;
}
