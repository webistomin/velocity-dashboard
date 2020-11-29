const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  dev: process.env.NODE_ENV !== 'production',
  /**
   * Head meta tags
   */
  head: {
    htmlAttrs: {
      lang: 'en',
      dir: 'ltr',
    },
    title: 'Velocity',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover' },
      {
        hid: 'description',
        name: 'description',
        content: 'Beep beep. Meet Velocity',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'format-detection', content: 'date=no' },
      { name: 'format-detection', content: 'address=no' },
      { name: 'format-detection', content: 'email=no' },
      { name: 'google', content: 'notranslate' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/img/sharing/tw-sharing.jpg',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Velocity',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Beep beep. Meet Velocity',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://cartodb-basemaps-c.global.ssl.fastly.net', crossOrigin: 'true' },
      { rel: 'preconnect', href: 'https://velocity-bucket1.s3.eu-central-1.amazonaws.com', crossOrigin: 'true' },
      { rel: 'preload', as: 'font', href: '/fonts/Rubik-300-normal.woff2', crossOrigin: 'true' },
      { rel: 'preload', as: 'font', href: '/fonts/Rubik-400-normal.woff2', crossOrigin: 'true' },
      { rel: 'preload', as: 'font', href: '/fonts/Rubik-500-normal.woff2', crossOrigin: 'true' },
    ],
  },
  /**
   * Loading bar
   */
  loading: { color: 'rgb(var(--color-primary))' },
  /**
   * PWA settings
   */
  pwa: {
    meta: {
      name: 'Velocity',
      description: 'Beep beep. Meet Velocity',
      theme_color: '#ffffff',
      ogType: 'website',
      ogSiteName: 'Velocity',
      ogTitle: 'Velocity',
      ogDescription: 'Beep beep. Meet Velocity',
      ogHost: 'https://stormy-ocean-88138.herokuapp.com/',
      ogUrl: 'https://stormy-ocean-88138.herokuapp.com/',
      ogImage: {
        path: '/img/sharing/fb-sharing.jpg',
        width: 1200,
        height: 628,
      },
      twitterCard: 'summary_large_image',
      twitterCreator: 'webistomin',
      twitterSite: 'https://stormy-ocean-88138.herokuapp.com/',
    },
    manifest: {
      name: 'Velocity',
      short_name: 'Velocity',
      description: 'Beep beep. Meet Velocity',
      lang: 'en',
      background_color: '#ffffff',
      theme_color: '#ffffff',
    },
  },
  /**
   * Global css
   */
  css: [
    '~assets/sass/main',
    'leaflet/dist/leaflet.css',
    'leaflet.markercluster/dist/MarkerCluster.css',
    'leaflet.markercluster/dist/MarkerCluster.Default.css',
  ],
  /**
   * Vue plugins
   */
  plugins: [
    { src: '~/plugins/libs/vuelidate.ts', ssr: true },
    { src: '~/plugins/libs/v-lazy-image.ts', ssr: true },
    { src: '~/plugins/libs/v-scroll-lock.ts', ssr: false },
    { src: '~plugins/libs/leaflet/leaflet.ts', ssr: false },
    { src: '~plugins/libs/v-click-outside.ts', ssr: true },
    { src: '~plugins/libs/vue-slider.ts', ssr: true },
    { src: '~plugins/libs/vue-select.ts', ssr: true },
    { src: '~plugins/libs/vue-draggable.ts', ssr: true },
    { src: '~plugins/libs/vue-notifications.ts', ssr: true },
    { src: '~plugins/axios-accessor.ts', ssr: true },
  ],
  /**
   * Nuxt modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/svg-sprite'],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/robots',
    [
      '@nuxtjs/sitemap',
      {
        hostname: 'https://stormy-ocean-88138.herokuapp.com/',
        generate: false,
        routes: [
          '/',
          '/login',
          '/reset-password',
          '/analytics',
          '/vehicles',
          '/reminders',
          '/map',
          '/chat',
          '/settings',
          '/profile',
        ],
      },
    ],
    '@nuxtjs/style-resources',
    ['@nuxtjs/router', { path: 'router', DefaultRouter: true }],
    '@nuxtjs/auth',
  ],
  /**
   * robots.txt content
   */
  robots: {
    UserAgent: '*',
    Allow: '*',
    Sitemap: (req) => `https://${req.headers.host}/sitemap.xml`,
  },
  /**
   * Global sass variables
   */
  styleResources: {
    sass: ['./assets/sass/dev.sass'],
  },
  /**
   * PostCSS plugins
   */
  postcss: {
    plugins: {
      'postcss-initial': {},
      'postcss-momentum-scrolling': ['scroll', 'auto'],
      'postcss-object-fit-images': {},
      'postcss-focus': {},
      autoprefixer: {},
    },
  },
  /**
   * this.$axios config
   */
  axios: {
    baseURL: `${process.env.BASE_URL || 'http://localhost:3000'}/api/v1`,
  },
  /**
   * Webpack config
   */
  build: {
    /**
     * Make extract css files instead of inline styles
     */
    extractCSS: true,
    /**
     * Combine multiple css files into one
     * because dynamic imports make huge duplications
     */
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
    /**
     * Nuxt property decorator requirement
     * https://github.com/nuxt-community/nuxt-property-decorator#nuxt-js-instructions
     */
    babel: {
      presets() {
        return [['@nuxt/babel-preset-app', { loose: true }]];
      },
    },
    transpile: ['vuex-module-decorators', 'nanoid'],
    /**
     * Remove all locale files except EN from date libraries
     */
    plugins: [
      new webpack.ContextReplacementPlugin(/date-fns[/\\]/, new RegExp(`[/\\\\](${['en'].join('|')})[/\\\\]`)),
      new MomentLocalesPlugin({
        localesToKeep: ['es-us'],
      }),
    ],

    extend(config, _ctx) {
      if (!config.resolve) {
        config.resolve = {};
      }

      if (!config.resolve.plugins) {
        config.resolve.plugins = [];
      }
      /**
       * Custom aliases for typescript
       */
      config.resolve.plugins.push(new TsconfigPathsPlugin({ configFile: './tsconfig.json' }));

      /**
       * Remove moment.js from chart.js dependencies
       */
      config.resolve.alias['chart.js'] = 'chart.js/dist/Chart.js';
      config.externals = {
        moment: 'moment',
      };
    },
  },
  /**
   * this.$auth config
   */
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
