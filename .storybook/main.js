const path = require('path');
const rootPath = path.resolve(__dirname, '../');

module.exports = {
  stories: ['../components/**/*.stories.[tj]s'],

  addons: ['@storybook/addon-actions', '@storybook/addon-links'],

  webpackFinal: async (config) => {
    config.resolve.alias['@'] = rootPath;
    config.resolve.alias['~'] = rootPath;

    config.module.rules.push({
      test: /\.sass$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            prependData: `
						@import "@/assets/sass/main.sass";
					`,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.pug$/,
      loader: 'pug-plain-loader',
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
