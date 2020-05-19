import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import consola from 'consola';
// @ts-ignore https://github.com/nuxt/typescript/issues/44
import { Nuxt, Builder } from 'nuxt';
import config from '../nuxt.config.js';
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// import and Set Nuxt.js options
config.dev = process.env.NODE_ENV !== 'production';

// load environment variables
dotenv.config();
app.use(morgan('dev'));

// Connect to database
if (process.env.DATABASE) {
  mongoose.set('useCreateIndex', true);
  mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }, (err: any) => {
    if (err) {
      consola.error({
        message: `Erorr: ${err}`,
        badge: true,
      });
    } else {
      consola.success({
        message: 'Successfully connected to database',
        badge: true,
      });
    }
  });
}

async function start(): Promise<void> {
  // init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  await nuxt.ready();
  // build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // give nuxt middleware to express
  app.use(nuxt.render);

  // listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  });
}
start();
