import { Request } from 'express';
import { ITripInterfaceDB } from 'common/types/trip/trip-schema';
import { IDriverInterfaceDB } from '../driver/driver-schema';

export interface ITripStartRequest extends Request {
  body: {
    tripId: ITripInterfaceDB['_id'];
    driverId: IDriverInterfaceDB['_id'];
    startTime: Date;
  };
}

export interface ITripStartResponse {
  success: boolean;
  message: string;
}
