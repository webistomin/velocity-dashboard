import { Schema, model, HookNextFunction } from 'mongoose';
import bcrypt from 'bcrypt';
import { IUserInterface, IUserSchema } from 'common/types/user/user-schema';
import { SiteThemes } from 'common/types/theme/site-themes';
import { nanoid } from 'nanoid';
import PasswordReset from 'server/models/auth/password-reset';
import { sendResetMail } from 'server/services/mailer/reset-mail';

const UserSchema: Schema = new Schema<IUserInterface>({
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

      bcrypt.hash(user.password, salt, function(err, hash) {
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

UserSchema.methods.comparePassword = async function(password: IUserSchema['password']): Promise<Boolean> {
  const user = this;
  const match = await bcrypt.compare(password, user.password);
  return match;
};

UserSchema.methods.forgotPassword = async function() {
  const token = nanoid(72);

  await PasswordReset.create({
    email: this.email,
    token,
    createdAt: new Date(),
  });
  sendResetMail(this.email, token);
};

export default model<IUserSchema>('User', UserSchema);
