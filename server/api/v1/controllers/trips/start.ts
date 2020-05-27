import { Response } from 'express';
import HTTPStatuses from 'http-status-codes';

import { ITripStartRequest } from 'common/types/trip/trip-start';
import Trip from 'server/models/trip/trip';
import { TripStatus } from 'common/types/trip/trip-status';

export default async (req: ITripStartRequest, res: Response) => {
  try {
    const { driverId, startTime, tripId } = req.body;

    await Trip.findOneAndUpdate(
      { _id: tripId },
      {
        $set: {
          driverId,
          status: TripStatus.IN_PROGRESS,
          'trip.startTime': startTime,
        },
      }
    );

    return res.json({
      success: true,
      message: 'Trip updated',
    });
  } catch (error) {
    return res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};
