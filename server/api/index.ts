import { Router } from 'express';
import user from './routes/user';
import auth from './routes/auth';
import healthCheck from './routes/health-check';

export default () => {
  const app = Router();
  healthCheck(app);
  user(app);
  auth(app);

  return app;
};
