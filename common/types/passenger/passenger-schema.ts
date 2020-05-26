import { Document } from 'mongoose';
import { SentMessageInfo } from 'nodemailer';

/**
 * Default passenger interface until it extended by Mongo
 */
export interface IPassengerInterface {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  location: string;
  tel: string;
  bio?: string;
  avatar?: string;
  payment: {
    visa: string;
    mastercard: string;
    paypal: string;
    applepay: string;
  };
  tripsTaken?: number;
}

/**
 * Passenger interface with Mongo indexes
 */
export interface IPassengerInterfaceDB extends IPassengerInterface {
  __v: number;
  _id: string;
}

/**
 * Mongoose interface extended by Document
 */
export interface IPassengerDocumentInterface extends Document, IPassengerInterface {}

/**
 * Mongoose passenger schema with methods
 */
export interface IPassengerSchema extends IPassengerDocumentInterface {
  comparePassword(userPassword: string): Promise<boolean>;
  sendForgotPasswordMail(): Promise<SentMessageInfo>;
  sendSignUpMail(): Promise<SentMessageInfo>;
}
