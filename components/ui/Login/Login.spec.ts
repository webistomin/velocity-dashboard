import { createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Login, { FormTypes } from './Login';

describe('Login UI', () => {
  const LoginSignInSelector = 'loginsignin-stub';
  const LoginSignUpSelector = 'loginsignup-stub';
  const LoginForgotSelector = 'loginforgot-stub';
  const LoginResetSelector = 'loginresetpassword-stub';

  const localVue = createLocalVue();
  localVue.use(VueRouter);
  const router = new VueRouter();

  const factory = (propsData = {}, options = {}) => {
    return shallowMount(Login, {
      localVue,
      router,
      propsData: {
        isNavOpened: false,
        ...propsData,
      },
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Set reset password form type if token exists in route params', () => {
    const wrapper = factory(
      {},
      {
        beforeCreate() {
          this._route = {
            params: {
              token: '12312312312',
            },
          };
        },
      }
    );
    expect(wrapper.vm.currentForm).toEqual(FormTypes.RESET_PASSWORD);
  });

  it('Set form type', () => {
    const wrapper = factory();
    wrapper.vm.setFormType(FormTypes.RESET_PASSWORD);
    expect(wrapper.vm.currentForm).toEqual(FormTypes.RESET_PASSWORD);
  });

  it('Show LoginSignIn if fort type is "sign-in"', () => {
    const wrapper = factory();
    wrapper.setData({
      currentForm: FormTypes.SIGN_IN,
    });
    const form = wrapper.find(LoginSignInSelector);
    expect(form.exists()).toEqual(true);
  });

  it('Show LoginSignUp if fort type is "sign-up"', async () => {
    const wrapper = factory();
    wrapper.setData({
      currentForm: FormTypes.SIGN_UP,
    });
    await wrapper.vm.$nextTick();
    const form = wrapper.find(LoginSignUpSelector);
    expect(form.exists()).toEqual(true);
  });

  it('Show LoginForgotPassword if fort type is "forgot-password"', async () => {
    const wrapper = factory();
    wrapper.setData({
      currentForm: FormTypes.FORGOT_PASSWORD,
    });
    await wrapper.vm.$nextTick();
    const form = wrapper.find(LoginForgotSelector);
    expect(form.exists()).toEqual(true);
  });

  it('Show LoginResetPassword if fort type is "reset-password"', async () => {
    const wrapper = factory();
    wrapper.setData({
      currentForm: FormTypes.RESET_PASSWORD,
    });
    await wrapper.vm.$nextTick();
    const form = wrapper.find(LoginResetSelector);
    expect(form.exists()).toEqual(true);
  });
});
