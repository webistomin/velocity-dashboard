import { Schema, model } from 'mongoose';
import { nanoid } from 'nanoid';

import { IDriverDocumentInterface, IDriverSchema } from 'common/types/driver/driver-schema';
import { DriverServiceStatus } from 'common/types/driver/driver-service-status';
import cryptPassword from 'server/models/methods/crypt-password';
import comparePassword from 'server/models/methods/compare-password';
import sendForgotPasswordMail from 'server/models/methods/send-forgot-password-mail';
import sendSignUpSuccessfulMail from 'server/models/methods/send-sign-up-mail';
import { DriverStatus } from 'common/types/driver/driver-status';

const DriverSchema: Schema = new Schema<IDriverDocumentInterface>({
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
  car: {
    id: {
      type: String,
      default: nanoid(),
      unique: true,
    },
    manufacturer: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    dateOfPurchase: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(DriverServiceStatus),
      required: true,
    },
    mileage: {
      type: Number,
      required: true,
    },
  },
  tripsTaken: {
    type: Number,
    required: true,
    default: 0,
  },
  mileageDone: {
    type: Number,
    required: true,
    default: 0,
  },
  avatar: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    emum: Object.values(DriverStatus),
    default: DriverStatus.INACTIVE,
    required: true,
  },
  moneyYearned: {
    type: Number,
    default: 0,
  },
  milesDriven: {
    type: Number,
    default: 0,
  },
});

DriverSchema.pre<IDriverSchema>('save', cryptPassword);

DriverSchema.methods.comparePassword = comparePassword;

DriverSchema.methods.sendForgotPasswordMail = sendForgotPasswordMail;

DriverSchema.methods.sendSignUpMail = sendSignUpSuccessfulMail;

export default model<IDriverSchema>('Driver', DriverSchema);
