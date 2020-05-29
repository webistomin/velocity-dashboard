import { IDriverInterfaceDB } from '../driver/driver-schema';

export interface IVehicle {
  id: IDriverInterfaceDB['car']['id'];
  manufacturer: IDriverInterfaceDB['car']['manufacturer'];
  model: IDriverInterfaceDB['car']['model'];
  dateOfPurchase: IDriverInterfaceDB['car']['dateOfPurchase'];
  status: IDriverInterfaceDB['car']['status'];
  mileage: IDriverInterfaceDB['car']['mileage'];
  location: IDriverInterfaceDB['location'];
  tripsTaken: IDriverInterfaceDB['tripsTaken'];
}

export interface IVehicleFormatted {
  id: IDriverInterfaceDB['car']['id'];
  manufacturer: IDriverInterfaceDB['car']['manufacturer'];
  model: IDriverInterfaceDB['car']['model'];
  dateOfPurchase: string;
  status: IDriverInterfaceDB['car']['status'];
  mileage: IDriverInterfaceDB['car']['mileage'];
  location: IDriverInterfaceDB['location'];
  tripsTaken: IDriverInterfaceDB['tripsTaken'];
}
