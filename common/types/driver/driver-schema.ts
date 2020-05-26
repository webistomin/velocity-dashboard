import { Document } from 'mongoose';
import { DriverStatus } from 'common/types/driver/driver-status';
import { SentMessageInfo } from 'nodemailer';

/**
 * Default driver interface until it extended by Mongo
 */
export interface IDriverInterface {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  location: string;
  tel: string;
  bio?: string;
  avatar?: string;
  car: {
    id: string;
    manufacturer: string;
    model: string;
    dateOfPurchase: string;
    status: DriverStatus;
    mileage: number;
  };
  tripsTaken: number;
  mileageDone: number;
}

/**
 * Driver interface with Mongo indexes
 */
export interface IDriverInterfaceDB extends IDriverInterface {
  __v: number;
  _id: string;
}

/**
 * Mongoose interface extended by Document
 */
export interface IDriverDocumentInterface extends Document, IDriverInterface {}

/**
 * Mongoose driver schema with methods
 */
export interface IDriverSchema extends IDriverDocumentInterface {
  comparePassword(userPassword: string): Promise<boolean>;
  sendForgotPasswordMail(): Promise<SentMessageInfo>;
  sendSignUpMail(): Promise<SentMessageInfo>;
}
