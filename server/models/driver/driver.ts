import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { nanoid } from 'nanoid';

import { IDriverDocumentInterface, IDriverSchema } from 'common/types/driver/driver-schema';
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
    serviceDue: {
      type: String,
      required: true,
    },
    dateOfPurchase: {
      type: String,
      required: true,
    },
    status: {
      type: DriverStatus,
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
});

DriverSchema.methods.comparePassword = async function(password: IDriverSchema['password']): Promise<Boolean> {
  const driver = this;
  const match = await bcrypt.compare(password, driver.password);
  return match;
};

export default model<IDriverSchema>('Driver', DriverSchema);
