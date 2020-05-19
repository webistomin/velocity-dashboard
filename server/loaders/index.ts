import express from 'express';
import mongooseLoader from './mongoose';
import expressLoader from './express';
import loggerLoader from './logger';

export default async (app: express.Application) => {
  await mongooseLoader();
  await loggerLoader(app);
  await expressLoader(app);
};
