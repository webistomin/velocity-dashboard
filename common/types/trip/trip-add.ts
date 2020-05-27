import { Request } from 'express';
import { ITripInterface } from './trip-schema';

export interface ITripAddRequest extends Request {
  body: ITripInterface;
}
