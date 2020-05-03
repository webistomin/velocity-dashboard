import AppLogo from './AppLogo';

export default {
  title: 'AppLogo',
  component: AppLogo,
};

export const Default = () => ({
  render: (h) => h(AppLogo),
  // components: { AppLogo },
  // template: '<app-logo />',
});
