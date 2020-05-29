import random from 'random';
// @ts-ignore
import randomName from 'node-random-name';

import { IPageHome } from 'common/types/pages/home';
import { DriverServiceStatus } from 'common/types/driver/driver-service-status';
import { DriverStatus } from 'common/types/driver/driver-status';
import { nanoid } from 'nanoid';
import { TripTypes } from 'common/types/trip/trip-types';
import { TripStatus } from 'common/types/trip/trip-status';

export const HOME_PAGE_MOCKED_RESPONSE = (): IPageHome => {
  return {
    operating: {
      score: random.int(0, 100),
      tripsCount: random.int(100, 1000),
    },
    tripsComparison: {
      today: [
        {
          x: 0,
          y: random.int(0, 100),
        },
        {
          x: 1,
          y: random.int(0, 100),
        },
        {
          x: 2,
          y: random.int(0, 100),
        },
        {
          x: 3,
          y: random.int(0, 100),
        },
        {
          x: 4,
          y: random.int(0, 100),
        },
        {
          x: 5,
          y: random.int(0, 100),
        },
        {
          x: 6,
          y: random.int(0, 100),
        },
        {
          x: 7,
          y: random.int(0, 100),
        },
        {
          x: 8,
          y: random.int(0, 100),
        },
        {
          x: 9,
          y: random.int(0, 100),
        },
      ],
      yesterday: [
        {
          x: 0,
          y: random.int(0, 100),
        },
        {
          x: 1,
          y: random.int(0, 100),
        },
        {
          x: 2,
          y: random.int(0, 100),
        },
        {
          x: 3,
          y: random.int(0, 100),
        },
        {
          x: 4,
          y: random.int(0, 100),
        },
        {
          x: 5,
          y: random.int(0, 100),
        },
        {
          x: 6,
          y: random.int(0, 100),
        },
        {
          x: 7,
          y: random.int(0, 100),
        },
        {
          x: 8,
          y: random.int(0, 100),
        },
        {
          x: 9,
          y: random.int(0, 100),
        },
      ],
    },
    vehiclesOnTrack: {
      todayCount: random.int(0, 100),
      yesterdayCount: random.int(0, 100),
    },
    distanceDriver: {
      todayCount: random.int(0, 1000),
      yesterdayCount: random.int(0, 1000),
    },
    topDrivers: {
      drivers: [
        {
          __v: 0,
          _id: nanoid(),
          firstName: randomName({ first: true }),
          lastName: randomName({ last: true }),
          password: '123',
          email: '123@mail.ru',
          location: 'New York, NY',
          tel: '+123456789',
          bio: 'I am a driver in Velocity',
          avatar: 'https://picsum.photos/140',
          car: {
            id: nanoid(),
            manufacturer: 'BMW',
            model: 'X5',
            dateOfPurchase: new Date('01-01-2001'),
            status: DriverServiceStatus.FULLY_SERVICES,
            mileage: random.int(0, 1000),
          },
          tripsTaken: random.int(0, 1000),
          mileageDone: random.int(0, 1000),
          status: DriverStatus.ACTIVE,
          moneyYearned: random.int(0, 1000),
          milesDriven: random.int(0, 1000),
        },
        {
          __v: 1,
          _id: nanoid(),
          firstName: randomName({ first: true }),
          lastName: randomName({ last: true }),
          password: '123',
          email: '123@mail.ru',
          location: 'New York, NY',
          tel: '+123456789',
          bio: 'I am a driver in Velocity',
          avatar: 'https://picsum.photos/140',
          car: {
            id: nanoid(),
            manufacturer: 'BMW',
            model: 'X5',
            dateOfPurchase: new Date('01-01-2001'),
            status: DriverServiceStatus.FULLY_SERVICES,
            mileage: random.int(0, 1000),
          },
          tripsTaken: random.int(0, 1000),
          mileageDone: random.int(0, 1000),
          status: DriverStatus.ACTIVE,
          moneyYearned: random.int(0, 1000),
          milesDriven: random.int(0, 1000),
        },
        {
          __v: 3,
          _id: nanoid(),
          firstName: randomName({ first: true }),
          lastName: randomName({ last: true }),
          password: '123',
          email: '123@mail.ru',
          location: 'New York, NY',
          tel: '+123456789',
          bio: 'I am a driver in Velocity',
          avatar: 'https://picsum.photos/140',
          car: {
            id: nanoid(),
            manufacturer: 'BMW',
            model: 'X5',
            dateOfPurchase: new Date('01-01-2001'),
            status: DriverServiceStatus.FULLY_SERVICES,
            mileage: random.int(0, 1000),
          },
          tripsTaken: random.int(0, 1000),
          mileageDone: random.int(0, 1000),
          status: DriverStatus.ACTIVE,
          moneyYearned: random.int(0, 1000),
          milesDriven: random.int(0, 1000),
        },
        {
          __v: 4,
          _id: nanoid(),
          firstName: randomName({ first: true }),
          lastName: randomName({ last: true }),
          password: '123',
          email: '123@mail.ru',
          location: 'New York, NY',
          tel: '+123456789',
          bio: 'I am a driver in Velocity',
          avatar: 'https://picsum.photos/140',
          car: {
            id: nanoid(),
            manufacturer: 'BMW',
            model: 'X5',
            dateOfPurchase: new Date('01-01-2001'),
            status: DriverServiceStatus.FULLY_SERVICES,
            mileage: random.int(0, 1000),
          },
          tripsTaken: random.int(0, 1000),
          mileageDone: random.int(0, 1000),
          status: DriverStatus.ACTIVE,
          moneyYearned: random.int(0, 1000),
          milesDriven: random.int(0, 1000),
        },
        {
          __v: 5,
          _id: nanoid(),
          firstName: randomName({ first: true }),
          lastName: randomName({ last: true }),
          password: '123',
          email: '123@mail.ru',
          location: 'New York, NY',
          tel: '+123456789',
          bio: 'I am a driver in Velocity',
          avatar: 'https://picsum.photos/140',
          car: {
            id: nanoid(),
            manufacturer: 'BMW',
            model: 'X5',
            dateOfPurchase: new Date('01-01-2001'),
            status: DriverServiceStatus.FULLY_SERVICES,
            mileage: random.int(0, 1000),
          },
          tripsTaken: random.int(0, 1000),
          mileageDone: random.int(0, 1000),
          status: DriverStatus.ACTIVE,
          moneyYearned: random.int(0, 1000),
          milesDriven: random.int(0, 1000),
        },
        {
          __v: 6,
          _id: nanoid(),
          firstName: randomName({ first: true }),
          lastName: randomName({ last: true }),
          password: '123',
          email: '123@mail.ru',
          location: 'New York, NY',
          tel: '+123456789',
          bio: 'I am a driver in Velocity',
          avatar: 'https://picsum.photos/140',
          car: {
            id: nanoid(),
            manufacturer: 'BMW',
            model: 'X5',
            dateOfPurchase: new Date('01-01-2001'),
            status: DriverServiceStatus.FULLY_SERVICES,
            mileage: random.int(0, 1000),
          },
          tripsTaken: random.int(0, 1000),
          mileageDone: random.int(0, 1000),
          status: DriverStatus.ACTIVE,
          moneyYearned: random.int(0, 1000),
          milesDriven: random.int(0, 1000),
        },
      ],
    },
    tripsTypeStatistics: {
      labels: ['April', 'May', 'June'],
      data: [
        [random.int(0, 100), random.int(0, 100), random.int(0, 100)],
        [random.int(0, 100), random.int(0, 100), random.int(0, 100)],
      ],
    },
    reminders: {
      todos: [
        {
          id: nanoid(),
          title: 'Meet George',
          description: 'Office #5 in 05:00PM',
          dueDate: new Date('05-29-2020'),
          isDone: false,
        },
        {
          id: nanoid(),
          title: 'Call peter for TPS reports',
          description: '',
          dueDate: new Date('06-29-2020'),
          isDone: false,
        },
        {
          id: nanoid(),
          title: 'Reply to customers',
          description: '',
          dueDate: new Date('06-01-2020'),
          isDone: false,
        },
        {
          id: nanoid(),
          title: "Review Anna's new article",
          description: '',
          dueDate: new Date('05-30-2020'),
          isDone: false,
        },
        {
          id: nanoid(),
          title: 'Meet Pete',
          description: 'Office #1 in 06:00PM',
          dueDate: new Date(),
          isDone: false,
        },
        {
          id: nanoid(),
          title: 'Call mom',
          description: '',
          dueDate: new Date(),
          isDone: false,
        },
      ],
    },
    trips: {
      onTrack: [
        {
          _id: 'abc123',
          __v: 0,
          passengerId: nanoid(),
          driverId: nanoid(),
          paymentDetails: {
            type: 'visa',
          },
          trip: {
            type: TripTypes.COMFORT,
            distance: 15,
            approximateTime: 13,
            price: 8,
            startAddress: '290  Eden Drive, Richmond, VA',
            endAddress: '4503  Orchard Street, Richmond, VA',
            startTime: new Date(),
            endTime: null,
          },
          path: [
            {
              lat: 50.516518,
              lng: 6.993713,
            },
            {
              lat: 50.516566,
              lng: 6.993747,
            },
            {
              lat: 50.516566,
              lng: 6.993747,
            },
            {
              lat: 50.516582,
              lng: 6.993847,
            },
            {
              lat: 50.516574,
              lng: 6.99392,
            },
            {
              lat: 50.516574,
              lng: 6.994007,
            },
            {
              lat: 50.51657,
              lng: 6.994085,
            },
            {
              lat: 50.516551,
              lng: 6.994153,
            },
            {
              lat: 50.516536,
              lng: 6.994224,
            },
            {
              lat: 50.516521,
              lng: 6.994309,
            },
            {
              lat: 50.516507,
              lng: 6.994385,
            },
            {
              lat: 50.516485,
              lng: 6.994459,
            },
            {
              lat: 50.516465,
              lng: 6.994526,
            },
            {
              lat: 50.516444,
              lng: 6.994602,
            },
            {
              lat: 50.516403,
              lng: 6.994652,
            },
            {
              lat: 50.516386,
              lng: 6.994722,
            },
            {
              lat: 50.516333,
              lng: 6.994762,
            },
            {
              lat: 50.516276,
              lng: 6.99481,
            },
            {
              lat: 50.516223,
              lng: 6.994854,
            },
            {
              lat: 50.51617,
              lng: 6.994882,
            },
            {
              lat: 50.516122,
              lng: 6.994915,
            },
            {
              lat: 50.516076,
              lng: 6.994951,
            },
            {
              lat: 50.516028,
              lng: 6.994998,
            },
            {
              lat: 50.515983,
              lng: 6.995041,
            },
            {
              lat: 50.515936,
              lng: 6.99509,
            },
            {
              lat: 50.515889,
              lng: 6.995134,
            },
            {
              lat: 50.515863,
              lng: 6.995193,
            },
            {
              lat: 50.515861,
              lng: 6.995203,
            },
            {
              lat: 50.515902,
              lng: 6.995251,
            },
            {
              lat: 50.515948,
              lng: 6.995238,
            },
            {
              lat: 50.515999,
              lng: 6.995237,
            },
            {
              lat: 50.515962,
              lng: 6.995287,
            },
            {
              lat: 50.515915,
              lng: 6.995296,
            },
            {
              lat: 50.51586,
              lng: 6.995298,
            },
            {
              lat: 50.515815,
              lng: 6.995294,
            },
          ],
          status: TripStatus.IN_PROGRESS,
        },
        {
          _id: 'bcd345',
          __v: 1,
          passengerId: nanoid(),
          driverId: nanoid(),
          paymentDetails: {
            type: 'visa',
          },
          trip: {
            type: TripTypes.COMFORT,
            distance: 15,
            approximateTime: 13,
            price: 8,
            endAddress: '290  Eden Drive, Richmond, VA',
            startAddress: '4503  Orchard Street, Richmond, VA',
            startTime: new Date(),
            endTime: null,
          },
          path: [
            {
              lat: 50.515815,
              lng: 6.995294,
            },
            {
              lat: 50.51586,
              lng: 6.995298,
            },
            {
              lat: 50.515915,
              lng: 6.995296,
            },
            {
              lat: 50.515962,
              lng: 6.995287,
            },
            {
              lat: 50.515999,
              lng: 6.995237,
            },
            {
              lat: 50.515948,
              lng: 6.995238,
            },
            {
              lat: 50.515902,
              lng: 6.995251,
            },
            {
              lat: 50.515861,
              lng: 6.995203,
            },
            {
              lat: 50.515863,
              lng: 6.995193,
            },
            {
              lat: 50.515889,
              lng: 6.995134,
            },
            {
              lat: 50.515936,
              lng: 6.99509,
            },
            {
              lat: 50.515983,
              lng: 6.995041,
            },
            {
              lat: 50.516028,
              lng: 6.994998,
            },
            {
              lat: 50.516076,
              lng: 6.994951,
            },
            {
              lat: 50.516122,
              lng: 6.994915,
            },
            {
              lat: 50.51617,
              lng: 6.994882,
            },
            {
              lat: 50.516223,
              lng: 6.994854,
            },
            {
              lat: 50.516276,
              lng: 6.99481,
            },
            {
              lat: 50.516333,
              lng: 6.994762,
            },
            {
              lat: 50.516386,
              lng: 6.994722,
            },
            {
              lat: 50.516403,
              lng: 6.994652,
            },
            {
              lat: 50.516444,
              lng: 6.994602,
            },
            {
              lat: 50.516465,
              lng: 6.994526,
            },
            {
              lat: 50.516485,
              lng: 6.994459,
            },
            {
              lat: 50.516507,
              lng: 6.994385,
            },
            {
              lat: 50.516521,
              lng: 6.994309,
            },
            {
              lat: 50.516536,
              lng: 6.994224,
            },
            {
              lat: 50.516551,
              lng: 6.994153,
            },
            {
              lat: 50.51657,
              lng: 6.994085,
            },
            {
              lat: 50.516574,
              lng: 6.994007,
            },
            {
              lat: 50.516574,
              lng: 6.99392,
            },
            {
              lat: 50.516582,
              lng: 6.993847,
            },
            {
              lat: 50.516566,
              lng: 6.993747,
            },
            {
              lat: 50.516566,
              lng: 6.993747,
            },
            {
              lat: 50.516518,
              lng: 6.993713,
            },
          ],
          status: TripStatus.IN_PROGRESS,
        },
      ],
    },
  };
};
