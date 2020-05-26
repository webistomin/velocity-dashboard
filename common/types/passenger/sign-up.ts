import { Request } from 'express';
import { IPassengerInterface } from './passenger-schema';

export interface IPassengerSignUpRequest extends Request {
  body: IPassengerInterface;
}
