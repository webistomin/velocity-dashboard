import { Schema, model } from 'mongoose';

import { IUserDocumentInterface, IUserSchema } from 'common/types/user/user-schema';
import { SiteThemes } from 'common/types/theme/site-themes';

import cryptPassword from '../methods/crypt-password';
import comparePassword from '../methods/compare-password';
import sendForgotPasswordMail from '../methods/send-forgot-password-mail';
import sendSignUpSuccessfulMail from '../methods/send-sign-up-mail';

const UserSchema: Schema = new Schema<IUserDocumentInterface>({
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
    enum: Object.values(SiteThemes),
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
  dob: {
    type: String,
    default: '',
  },
  avatar: {
    type: String,
    default: '',
  },
  lastLogin: {
    type: Date,
  },
});

UserSchema.pre<IUserSchema>('save', cryptPassword);

UserSchema.methods.comparePassword = comparePassword;

UserSchema.methods.sendForgotPasswordMail = sendForgotPasswordMail;

UserSchema.methods.sendSignUpMail = sendSignUpSuccessfulMail;

export default model<IUserSchema>('User', UserSchema);
