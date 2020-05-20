import { Request, Response } from 'express';
import HTTPStatuses from 'http-status-codes';

export default (_req: Request, res: Response) => {
  res.status(HTTPStatuses.OK).send({ status: 'OK' });
};
