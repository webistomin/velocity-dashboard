const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/style-resources',
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    ['@nuxtjs/router', { path: 'router', DefaultRouter: true }],
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
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  build: {
    extractCSS: true,
    babel: {
      presets() {
        return [['@nuxt/babel-preset-app', { loose: true }]];
      },
    },
    plugins: [
      new MomentLocalesPlugin({
        localesToKeep: ['es-us'],
      }),
    ],
    /*
     ** You can extend webpack config here
     */
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
};
