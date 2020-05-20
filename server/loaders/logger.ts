import morgan, { Options } from 'morgan';
import express, { Request } from 'express';

const morganOption: Options = {
  skip: (req: Request) => {
    /**
     * Skip static requests
     */
    return req.url.includes('_nuxt');
  },
};

/**
 * Set request logger
 */
export default (app: express.Application) => {
  app.use(morgan('dev', morganOption));
};
