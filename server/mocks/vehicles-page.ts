import { nanoid } from 'nanoid';
import random from 'random';

import { IPageVehicles } from 'common/types/pages/vehicles';
import { DriverServiceStatus } from 'common/types/driver/driver-service-status';

const manufacturers = ['BMW', 'Audi', 'Mazda', 'Ford', 'Nissan', 'Mercedes-Benz'];
const models = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const locations = ['New York, NY', 'California, CA', 'Texas, TX', 'Washington DC, DC'];
const statuses = Object.values(DriverServiceStatus).map((key) => key.replace('-', ' ') as DriverServiceStatus);

export const VEHICLES_PAGE_MOCKED_RESPONSE = (): IPageVehicles => {
  const vehicles = [];

  for (let i = 0; i <= 100; i++) {
    vehicles.push({
      id: nanoid(5),
      manufacturer: manufacturers[random.int(0, manufacturers.length - 1)],
      model: models[random.int(0, models.length - 1)],
      location: locations[random.int(0, locations.length - 1)],
      mileage: random.int(100, 100000),
      dateOfPurchase: new Date(`0${random.int(1, 9)}-0${random.int(1, 9)}-200${random.int(1, 9)}`),
      status: statuses[random.int(0, statuses.length - 1)],
      tripsTaken: random.int(100, 1000),
    });
  }
  return {
    vehicles,
  };
};
