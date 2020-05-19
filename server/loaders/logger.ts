import morgan from 'morgan';
import express from 'express';

/**
 * Set request logger
 */
export default (app: express.Application) => {
  app.use(morgan('dev'));
};
