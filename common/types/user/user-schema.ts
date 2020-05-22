import { Document, Types } from 'mongoose';
import { SiteThemes } from 'common/types/theme/site-themes';
import { UserRoles } from 'common/types/user/user-roles';
import { SentMessageInfo } from 'nodemailer';

export interface IUserInterface extends Document {
  firstName: string;
  lastName: string;
  role: UserRoles;
  email: string;
  password: string;
  theme: SiteThemes;
  notifications: {
    isEmailNotificationsEnabled: boolean;
    isPushNotificationsEnabled: boolean;
    isMonthlyNotificationsEnabled: boolean;
    isQuarterNotificationsEnabled: boolean;
  };
  avatar: string;
  phone: string;
  socials: {
    twitter: string;
  };
  location: string;
  bio: string;
}

export interface IUserSchema extends IUserInterface {
  __v: number;
  _id: Types.ObjectId;
  comparePassword(userPassword: string): Promise<boolean>;
  sendForgotPasswordMail(): Promise<SentMessageInfo>;
  sendSignUpMail(): Promise<SentMessageInfo>;
}
