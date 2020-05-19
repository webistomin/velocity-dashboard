import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '../api';
import config from '../config';

export default (app: express.Application) => {
  /**
   *  Middleware that transforms the raw string of req.body into json
   */
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  /**
   * Enable Cross Origin Resource Sharing to all origins by default
   */
  app.use(cors());
  /**
   * Load API routes
   */
  app.use(config.api.prefix, routes());
};
