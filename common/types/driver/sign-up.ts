import { Request } from 'express';
import { IDriverInterface } from './driver-schema';

export interface IDriverSignUpRequest extends Request {
  body: IDriverInterface;
}
