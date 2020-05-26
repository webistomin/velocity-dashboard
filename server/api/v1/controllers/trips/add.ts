import { Response, Request } from 'express';
import HTTPStatuses from 'http-status-codes';
import Trip from 'server/models/trip/trip';

export default (_req: Request, res: Response) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
    const newTrip = new Trip();

    return res.json({
      success: true,
    });
  } catch (error) {
    return res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};
