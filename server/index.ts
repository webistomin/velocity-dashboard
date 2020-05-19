import express from 'express';
import consola from 'consola';
/**
 * https://github.com/nuxt/typescript/issues/44
 */
// @ts-ignore
import { Nuxt, Builder } from 'nuxt';
import nuxtConfig from '../nuxt.config.js';
import config from './config';
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
