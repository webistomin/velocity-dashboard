import { Schema, model } from 'mongoose';
import { IAuthPasswordResetSchema } from 'common/types/auth/reset';
import { IUserSchema } from 'common/types/user/user-schema';

const PasswordResetSchema: Schema = new Schema<IAuthPasswordResetSchema>({
  email: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

export default model<IUserSchema>('PasswordReset', PasswordResetSchema);
