import { Response } from 'express';
import HTTPStatuses from 'http-status-codes';

import Trip from 'server/models/trip/trip';
import { TripStatus } from 'common/types/trip/trip-status';
import { ITripEndRequest } from 'common/types/trip/trip-end';

export default async (req: ITripEndRequest, res: Response) => {
  try {
    const { endTime, tripId } = req.body;

    await Trip.findOneAndUpdate(
      { _id: tripId },
      {
        $set: {
          status: TripStatus.COMPLETED,
          'trip.endTime': endTime,
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
