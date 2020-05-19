import mongoose, { Schema, Document } from 'mongoose';

export type IUserRoles = 'admin' | 'operator';

export interface IUserSchema extends Document {
  firstName: string;
  lastName: string;
  role: IUserRoles;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IUserSchema>('User', UserSchema);
