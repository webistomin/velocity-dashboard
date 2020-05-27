import { Request, Response } from 'express';
import HTTPStatuses from 'http-status-codes';

import { IAuthLogoutResponseBody } from 'common/types/auth/logout';

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
