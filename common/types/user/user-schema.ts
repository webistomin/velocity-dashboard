import { Document } from 'mongoose';
import { SiteThemes } from 'common/types/theme/site-themes';
import { UserRoles } from 'common/types/user/user-roles';
import { SentMessageInfo } from 'nodemailer';

/**
 * Default user interface until it extended by Mongo
 */
export interface IUserInterface {
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
  dob: string;
}

/**
 * User interface with Mongo indexes
 */
export interface IUserInterfaceDB extends IUserInterface {
  __v: number;
  _id: string;
}

/**
 * Mongoose interface extended by Document
 */
export interface IUserDocumentInterface extends Document, IUserInterface {}

/**
 * Mongoose user schema with methods
 */
export interface IUserSchema extends IUserDocumentInterface {
  comparePassword(userPassword: string): Promise<boolean>;
  sendForgotPasswordMail(): Promise<SentMessageInfo>;
  sendSignUpMail(): Promise<SentMessageInfo>;
}
