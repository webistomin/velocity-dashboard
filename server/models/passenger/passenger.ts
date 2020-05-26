import { Schema, model } from 'mongoose';

import { IPassengerDocumentInterface, IPassengerSchema } from 'common/types/passenger/passenger-schema';

import cryptPassword from '../methods/crypt-password';
import comparePassword from '../methods/compare-password';
import sendForgotPasswordMail from '../methods/send-forgot-password-mail';
import sendSignUpSuccessfulMail from '../methods/send-sign-up-mail';

const PassengerSchema: Schema = new Schema<IPassengerDocumentInterface>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: '',
  },
  avatar: {
    type: String,
    default: '',
  },
  payment: {
    visa: {
      type: String,
      default: '',
    },
    mastercard: {
      type: String,
      default: '',
    },
    paypal: {
      type: String,
      default: '',
    },
    applepay: {
      type: String,
      default: '',
    },
  },
  tripsTaken: {
    type: Number,
    required: true,
    default: 0,
  },
});

PassengerSchema.pre<IPassengerSchema>('save', cryptPassword);

PassengerSchema.methods.comparePassword = comparePassword;

PassengerSchema.methods.sendForgotPasswordMail = sendForgotPasswordMail;

PassengerSchema.methods.sendSignUpMail = sendSignUpSuccessfulMail;

export default model<IPassengerSchema>('Passenger', PassengerSchema);
