import { ITripInterfaceDB } from 'common/types/trip/trip-schema';

export interface IPageMap {
  trips: ITripInterfaceDB[];
}

export interface IPageMapResponse {
  content?: IPageMap;
  success: boolean;
  message?: string;
}
