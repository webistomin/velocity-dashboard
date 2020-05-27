import { Request } from 'express';
import { IPassengerInterface } from './passenger-schema';

export interface IPassengerSignUpRequest extends Request {
  body: IPassengerInterface;
}

export interface IPassengerSignUpResponse {
  success: boolean;
  token?: string;
  message?: string;
}
