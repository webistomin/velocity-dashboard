import { Request, Response } from 'express';
import { IAuthLogoutResponseBody } from 'common/types/auth/logout';

export default (_req: Request, res: Response<IAuthLogoutResponseBody>) => {
  res.json({
    success: true,
  });
};
