import { Request } from 'express';
import { IPassengerInterface } from './passenger-schema';

export interface IPassengerAddRequest extends Request {
  body: IPassengerInterface;
}
