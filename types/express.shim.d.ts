// eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
import { IUserSchema } from 'common/types/user/user-schema';

declare global {
  namespace Express {
    interface Request {
      decodedUser: IUserSchema;
    }
  }
}
