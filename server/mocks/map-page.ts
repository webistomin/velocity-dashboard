import { IPageMap } from 'common/types/pages/map';
import { nanoid } from 'nanoid';

import { TripTypes } from 'common/types/trip/trip-types';
import { TripStatus } from 'common/types/trip/trip-status';

export const MAP_PAGE_MOCKED_RESPONSE = (): IPageMap => {
  return {
    trips: [
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
  };
};
