import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuelidate from 'vuelidate';
import LoginResetPassword from './LoginResetPassword';

describe('LoginResetPassword', () => {
  const localVue = createLocalVue();
  localVue.use(Vuelidate);
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(LoginResetPassword, {
      localVue,
      propsData: {
        ...propsData,
      },
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });
});
