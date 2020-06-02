import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuelidate from 'vuelidate';
import { FormTypes } from 'components/ui/Login/Login';
import LoginSignUp from './LoginSignUp';

describe('LoginSignUp', () => {
  const localVue = createLocalVue();
  localVue.use(Vuelidate);
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(LoginSignUp, {
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
    const result = wrapper.vm.setFormType(FormTypes.SIGN_IN);
    expect(wrapper.emitted().setFormName);
    expect(result).toEqual(FormTypes.SIGN_IN);
  });
});
