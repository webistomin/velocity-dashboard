import { Request, Response } from 'express';
import { IAuthLogoutResponseBody } from 'common/types/auth/logout';
import HTTPStatuses from 'http-status-codes';

export default (_req: Request, res: Response<IAuthLogoutResponseBody>) => {
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
