import StoryRouter from 'storybook-vue-router';
import AppLogo from './AppLogo';

export default {
  title: 'AppLogo',
  component: AppLogo,
  decorators: [StoryRouter()],
};

export const Default = () => ({
  components: { AppLogo },
  template: '<app-logo />',
});
