import mongoose, { Schema, Document, HookNextFunction } from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

export type IUserRoles = 'admin' | 'operator';

export interface IUserSchema extends Document {
  firstName: string;
  lastName: string;
  role: IUserRoles;
  email: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
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

UserSchema.pre<IUserSchema>('save', function(next: HookNextFunction) {
  const user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }

      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) {
          return next(err);
        }

        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function(password: IUserSchema['password']): Boolean {
  const user = this;
  return bcrypt.compareSync(password, user.password);
};

export default mongoose.model<IUserSchema>('User', UserSchema);
