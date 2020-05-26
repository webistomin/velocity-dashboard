import { Schema, model } from 'mongoose';
import { ITripDocumentInterface, ITripSchema } from 'common/types/trip/trip-schema';

const TripSchema: Schema = new Schema<ITripDocumentInterface>({
  passenger: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  driver: {
    type: Schema.Types.ObjectId,
    ref: 'Driver',
    required: true,
  },
  paymentDetails: {
    type: String,
    required: true,
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
      type: Number,
      required: true,
    },
    endTime: {
      type: Number,
      required: true,
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
});

export default model<ITripSchema>('Trip', TripSchema);
