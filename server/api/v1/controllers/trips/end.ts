import { Response } from 'express';
import HTTPStatuses from 'http-status-codes';

import Trip from 'server/models/trip/trip';
import Driver from 'server/models/driver/driver';
import { TripStatus } from 'common/types/trip/trip-status';
import { ITripEndRequest, ITripEndResponse } from 'common/types/trip/trip-end';

export default async (req: ITripEndRequest, res: Response<ITripEndResponse>) => {
  try {
    const { endTime, tripId } = req.body;

    const foundTrip = await Trip.findOneAndUpdate(
      { _id: tripId },
      {
        $set: {
          status: TripStatus.COMPLETED,
          'trip.endTime': endTime,
        },
      }
    );

    if (foundTrip) {
      await Driver.findOneAndUpdate(
        { _id: foundTrip.driverId },
        { $inc: { moneyYearned: foundTrip.trip.price, milesDriven: foundTrip.trip.distance } }
      );
    }

    return res.json({
      success: true,
      message: 'Trip has been completed',
    });
  } catch (error) {
    return res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};
