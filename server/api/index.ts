import { Router } from 'express';
import profile from './routes/profile';
import auth from './routes/auth';
import healthCheck from './routes/health-check';

export default () => {
  const app = Router();
  healthCheck(app);
  profile(app);
  auth(app);

  return app;
};
