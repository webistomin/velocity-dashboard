import { Schema, model } from 'mongoose';
import { IAuthPasswordReset, IAuthPasswordResetSchema } from 'common/types/auth/reset';

const PasswordResetSchema: Schema = new Schema<IAuthPasswordReset>({
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

export default model<IAuthPasswordResetSchema>('PasswordReset', PasswordResetSchema);
