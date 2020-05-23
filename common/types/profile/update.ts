import { IUserSettings } from 'components/ui/Settings/Settings';
import { Request } from 'express';
import { IUserSchema } from 'common/types/user/user-schema';

export interface IProfileUpdateRequest extends Request {
  body: IUserSettings;
  shouldUpdatePassword?: boolean;
  foundUser: IUserSchema;
}

export interface IProfileUpdateResponseBody {
  success: boolean;
  message: string;
  token?: string | null;
}
