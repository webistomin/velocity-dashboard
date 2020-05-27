import { Request } from 'express';
import { ITripInterfaceDB } from 'common/types/trip/trip-schema';

export interface ITripEndRequest extends Request {
  body: {
    tripId: ITripInterfaceDB['_id'];
    endTime: Date;
  };
}

export interface ITripEndResponse {
  success: boolean;
  message: string;
}
