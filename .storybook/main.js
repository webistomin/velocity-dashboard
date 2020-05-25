const path = require('path');
const rootPath = path.resolve(__dirname, '../');

module.exports = {
  stories: ['../components/**/*.stories.[tj]s'],

  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs'],

  webpackFinal: async (config) => {
    config.resolve.extensions.push('.ts', '.tsx', '.vue', '.sass');
    config.resolve.alias['@'] = rootPath;
    config.resolve.alias['~'] = rootPath;
    config.resolve.alias['types'] = path.resolve(rootPath, 'types');
    config.resolve.alias['components'] = path.resolve(rootPath, 'components');

    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['transform-vue-jsx', '@babel/plugin-transform-modules-commonjs'],
          },
        },
        {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
            transpileOnly: true,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.sass$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            prependData: `@import "@/assets/sass/dev.sass";`,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      use: [
        {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
};
