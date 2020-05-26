import { Router } from 'express';
import profileRoutes from './routes/profile';
import authRoutes from './routes/auth';
import healthCheckRoutes from './routes/healthcheck';
import weatherRoutes from './routes/weather';
import statisticsRoutes from './routes/statistics';

export default () => {
  const app = Router();

  healthCheckRoutes(app);
  profileRoutes(app);
  authRoutes(app);
  weatherRoutes(app);
  statisticsRoutes(app);

  return app;
};
