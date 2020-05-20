import mongoose, { Schema, HookNextFunction } from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
import { IUserSchema } from 'common/types/user/user-schema';
import { SiteThemes } from 'common/types/theme/site-themes';

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
  theme: {
    type: String,
    default: SiteThemes.SHELOB,
  },
  notifications: {
    isEmailNotificationsEnabled: {
      type: Boolean,
      default: true,
    },
    isPushNotificationsEnabled: {
      type: Boolean,
      default: false,
    },
    isMonthlyNotificationsEnabled: {
      type: Boolean,
      default: false,
    },
    isQuarterNotificationsEnabled: {
      type: Boolean,
      default: false,
    },
  },
  phone: {
    type: String,
    default: '',
  },
  socials: {
    twitter: {
      type: String,
      default: '',
    },
  },
  location: {
    type: String,
    default: '',
  },
  bio: {
    type: String,
    default: '',
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
