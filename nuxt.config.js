const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  dev: process.env.NODE_ENV !== 'production',
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'format-detection', content: 'date=no' },
      { name: 'format-detection', content: 'address=no' },
      { name: 'format-detection', content: 'email=no' },
      { name: 'google', content: 'notranslate' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://cartodb-basemaps-c.global.ssl.fastly.net' },
      { rel: 'preconnect', href: 'https://cdn.jsdelivr.nett' },
    ],
  },
  loading: { color: '#fff' },
  css: [
    '~assets/sass/main',
    'leaflet/dist/leaflet.css',
    'leaflet.markercluster/dist/MarkerCluster.css',
    'leaflet.markercluster/dist/MarkerCluster.Default.css',
  ],
  plugins: [
    { src: '~/plugins/libs/vuelidate.ts', ssr: true },
    { src: '~/plugins/libs/v-lazy-image.ts', ssr: true },
    { src: '~/plugins/libs/v-scroll-lock.ts', ssr: false },
    { src: '~plugins/libs/leaflet/leaflet.ts', ssr: false },
    { src: '~plugins/libs/v-click-outside.ts', ssr: true },
    { src: '~plugins/libs/vue-virtual-scroll.ts', ssr: true },
    { src: '~plugins/libs/vue-slider.ts', ssr: true },
    { src: '~plugins/libs/vue-select.ts', ssr: true },
    { src: '~plugins/libs/vue-draggable.ts', ssr: true },
    { src: '~plugins/libs/vue-notifications.ts', ssr: true },
    { src: '~plugins/axios-accessor.ts', ssr: true },
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/style-resources',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    ['@nuxtjs/router', { path: 'router', DefaultRouter: true }],
    '@nuxtjs/auth',
  ],
  styleResources: {
    sass: ['./assets/sass/dev.sass'],
  },
  postcss: {
    plugins: {
      'postcss-initial': {},
      'postcss-momentum-scrolling': ['scroll', 'auto'],
      'postcss-object-fit-images': {},
      'postcss-focus': {},
      autoprefixer: {},
    },
  },
  axios: {
    baseURL: `${process.env.BASE_URL || 'http://localhost:3000'}/api/v1`,
  },
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue|tsx|ts|sass)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    babel: {
      presets() {
        return [['@nuxt/babel-preset-app', { loose: true }]];
      },
    },
    transpile: ['vuex-module-decorators'],
    plugins: [
      new MomentLocalesPlugin({
        localesToKeep: ['es-us'],
      }),
    ],

    extend(config) {
      if (!config.resolve) {
        config.resolve = {};
      }

      if (!config.resolve.plugins) {
        config.resolve.plugins = [];
      }

      config.resolve.plugins.push(new TsconfigPathsPlugin({ configFile: './tsconfig.json' }));
    },
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/signin', method: 'post', propertyName: 'token' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/profile/own', method: 'get' },
        },
        tokenRequired: true,
        tokenType: 'Bearer',
      },
    },
    redirect: {
      home: '/',
      callback: false,
      logout: '/login',
    },
  },
};
