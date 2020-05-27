import { Document } from 'mongoose';
import { TripStatus } from 'common/types/trip/trip-status';
import { TripTypes } from 'common/types/trip/trip-types';
import { IPassengerInterfaceDB } from '../passenger/passenger-schema';
import { IDriverInterfaceDB } from '../driver/driver-schema';

export interface ITripPathInterface {
  lat: number;
  lng: number;
}

/**
 * Default trip interface until it extended by Mongo
 */
export interface ITripInterface {
  passengerId: IPassengerInterfaceDB['_id'];
  driverId: IDriverInterfaceDB['_id'] | null;
  paymentDetails: {
    type: string;
  };
  trip: {
    type: TripTypes;
    distance: number;
    approximateTime: number;
    price: number;
    startAddress: string;
    endAddress: string;
    startTime: Date | null;
    endTime: Date | null;
  };
  path: ITripPathInterface[];
  status: TripStatus;
}

/**
 * Trip interface with Mongo indexes
 */
export interface ITripInterfaceDB extends ITripInterface {
  __v: number;
  _id: string;
}

/**
 * Mongoose interface extended by Document
 */
export interface ITripDocumentInterface extends Document, ITripInterface {}

/**
 * Mongoose trip schema with methods
 */
export interface ITripSchema extends ITripDocumentInterface {}
