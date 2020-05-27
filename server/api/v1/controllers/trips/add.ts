import { Response } from 'express';
import HTTPStatuses from 'http-status-codes';

import Trip from 'server/models/trip/trip';
import { ITripAddRequest, ITripAddResponse } from 'common/types/trip/trip-add';

export default async (req: ITripAddRequest, res: Response<ITripAddResponse>) => {
  try {
    const data = req.body;
    const newTrip = new Trip();

    newTrip.passengerId = data.passengerId;
    newTrip.trip = data.trip;
    newTrip.paymentDetails = data.paymentDetails;
    newTrip.path = data.path;

    await newTrip.save();

    return res.status(HTTPStatuses.CREATED).json({
      success: true,
      message: 'Trip created',
    });
  } catch (error) {
    return res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};
