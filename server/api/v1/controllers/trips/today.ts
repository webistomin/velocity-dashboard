import { Response, Request } from 'express';
import HTTPStatuses from 'http-status-codes';

export default (_req: Request, res: Response) => {
  try {
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
