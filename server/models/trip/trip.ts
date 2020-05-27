import { Schema, model } from 'mongoose';
import { ITripDocumentInterface, ITripSchema } from 'common/types/trip/trip-schema';
import { TripStatus } from 'common/types/trip/trip-status';
import { TripTypes } from 'common/types/trip/trip-types';

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
    type: {
      type: String,
      enum: Object.values(TripTypes),
      required: true,
    },
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
    type: String,
    enum: Object.values(TripStatus),
    required: true,
    default: TripStatus.NOT_STARTED,
  },
});

export default model<ITripSchema>('Trip', TripSchema);
