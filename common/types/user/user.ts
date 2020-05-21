import { IUserSchema } from './user-schema';

export interface IOwnUserProfileResponseBody {
  success: boolean;
  message?: string;
  user?: IUserSchema;
}
