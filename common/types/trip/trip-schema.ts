import { Document } from 'mongoose';
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
  passenger: IPassengerInterfaceDB;
  driver: IDriverInterfaceDB;
  paymentDetails: {
    type: string;
  };
  trip: {
    distance: number;
    approximateTime: number;
    price: number;
    startAddress: string;
    endAddress: string;
    startTime: string;
    endTime: string;
  };
  path: ITripPathInterface[];
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
