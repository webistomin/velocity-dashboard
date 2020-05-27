import { Schema, model } from 'mongoose';
import { ITripDocumentInterface, ITripSchema } from 'common/types/trip/trip-schema';
import { TripStatus } from 'common/types/trip/trip-status';

const TripSchema: Schema = new Schema<ITripDocumentInterface>({
  passengerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  driverId: {
    type: Schema.Types.ObjectId,
    ref: 'Driver',
    default: null,
  },
  paymentDetails: {
    type: {
      type: String,
      required: true,
    },
  },
  trip: {
    distance: {
      type: Number,
      required: true,
    },
    approximateTime: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    startAddress: {
      type: String,
      required: true,
    },
    endAddress: {
      type: String,
      required: true,
    },
    startTime: {
      type: Date,
      default: null,
    },
    endTime: {
      type: Date,
      default: null,
    },
  },
  path: [
    {
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
    },
  ],
  status: {
    type: TripStatus,
    required: true,
    default: TripStatus.NOT_STARTED,
  },
});

export default model<ITripSchema>('Trip', TripSchema);
