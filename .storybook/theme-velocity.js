import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: 'rgb(46, 91, 255)',
  colorSecondary: 'rgba(46, 91, 255, 0.2)',

  // UI
  appBg: '#f7f9ff',
  appContentBg: '#f7f9ff',
  appBorderColor: '#d5deff',
  appBorderRadius: 5,

  // Typography
  fontBase: 'Rubik, Arial, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'rgb(45, 56, 77)',
  textInverseColor: 'rgb(45, 56, 77)',

  // Toolbar default and active colors
  barTextColor: 'rgb(46, 91, 255, 0.5)',
  barSelectedColor: 'rgb(46, 91, 255)',
  barBg: 'rgba(46, 91, 255, 0.1)',

  // Form colors
  inputBg: 'rgba(224, 231, 255, 0.2)',
  inputBorder: 'rgb(224, 231, 255)',
  inputTextColor: 'rgb(46, 91, 255)',
  inputBorderRadius: 5,

  brandTitle: 'Velocity storybook',
  brandUrl: '/',
  brandImage: 'https://velocity-bucket1.s3.eu-central-1.amazonaws.com/logo/logo.png',
});
