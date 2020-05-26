import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

import { IPassengerDocumentInterface, IPassengerSchema } from 'common/types/passenger/passenger-schema';

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

PassengerSchema.methods.comparePassword = async function(password: IPassengerSchema['password']): Promise<Boolean> {
  const driver = this;
  const match = await bcrypt.compare(password, driver.password);
  return match;
};

export default model<IPassengerSchema>('Driver', PassengerSchema);
