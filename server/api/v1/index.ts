import { Router } from 'express';
import profile from './routes/profile';
import auth from './routes/auth';
import healthCheck from './routes/healthcheck';
import weather from './routes/weather';

export default () => {
  const app = Router();
  healthCheck(app);
  profile(app);
  auth(app);
  weather(app);

  return app;
};
