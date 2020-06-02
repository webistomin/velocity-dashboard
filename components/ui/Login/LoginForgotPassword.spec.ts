import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuelidate from 'vuelidate';
import { FormTypes } from 'components/ui/Login/Login';
import LoginForgotPassword from './LoginForgotPassword';

describe('LoginForgotPassword', () => {
  const localVue = createLocalVue();
  localVue.use(Vuelidate);
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(LoginForgotPassword, {
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

  it('Emit "setFormName" event', () => {
    const wrapper = factory();
    const result = wrapper.vm.setFormType(FormTypes.FORGOT_PASSWORD);
    expect(wrapper.emitted().setFormName);
    expect(result).toEqual(FormTypes.FORGOT_PASSWORD);
  });
});
