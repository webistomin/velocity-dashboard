import path from 'path';
import express from 'express';
import consola from 'consola';
import moduleAlias from 'module-alias';
/**
 * https://github.com/nuxt/typescript/issues/44
 */
// @ts-ignore
import { Nuxt, Builder } from 'nuxt';

import nuxtConfig from '../nuxt.config.js';
import config from './config';

/**
 * Nuxt doesnt't understand aliases from nuxt.config.js or tsconfig.json
 * so load aliases by module-alias package
 * https://github.com/nuxt/nuxt.js/issues/4580
 */
moduleAlias.addAlias('common', path.resolve(__dirname, '../common'));
moduleAlias.addAlias('server', path.resolve(__dirname, '.'));
moduleAlias.addAlias('controllers', path.resolve(__dirname, './api/v1/controllers'));
moduleAlias.addAlias('middlewares', path.resolve(__dirname, './api/v1/middlewares'));

const app = express();

/**
 * Import and Set Nuxt.js options
 */
nuxtConfig.dev = config.env !== 'production';

async function start(): Promise<void> {
  /**
   * Init loaders
   */
  await require('./loaders').default(app);

  /**
   * Init Nuxt.js
   */
  const nuxt = new Nuxt(nuxtConfig);

  const { host, port } = nuxt.options.server;

  await nuxt.ready();
  /**
   * Build only in dev mode
   */
  if (nuxtConfig.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  /**
   * Give nuxt middleware to express
   */
  app.use(nuxt.render);

  /**
   * Listen the server
   */
  app.listen(port, host);

  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  });
}

start();
