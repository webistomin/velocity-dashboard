import { Router, Request, Response } from 'express';

/**
 * Health Check endpoints
 */
export default (app: Router) => {
  app.get('/status', (_req: Request, res: Response) => {
    res.status(200).send({ status: 'OK' });
  });
  app.head('/status', (_req: Request, res: Response) => {
    res.status(200).send({ status: 'OK' });
  });
};
