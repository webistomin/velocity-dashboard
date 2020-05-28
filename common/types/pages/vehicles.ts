import { IVehicle } from '../vehicles/vehicles';

export interface IPageVehicles {
  vehicles: IVehicle[];
}

export interface IPageVehiclesResponse {
  content?: IPageVehicles;
  message?: string;
  success: boolean;
}
