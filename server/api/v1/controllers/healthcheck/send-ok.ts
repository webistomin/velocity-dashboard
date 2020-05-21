import { Request, Response } from 'express';
import HTTPStatuses from 'http-status-codes';
import { IHealthCheckResponseBody } from 'common/types/health-check/healt-check';

export default (_req: Request, res: Response<IHealthCheckResponseBody>) => {
  res.status(HTTPStatuses.OK).send({ status: 'OK' });
};
