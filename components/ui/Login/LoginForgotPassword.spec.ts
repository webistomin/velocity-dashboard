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

  const fakeEvent = { preventDefault: () => {} };

  const validComponentWrapper = (mockedAxios: any, mockedNotify: any) =>
    factory(
      {},
      {
        mocks: {
          $v: {
            forgotForm: {
              email: {
                $touch: () => {},
              },
            },
            $touch: () => {},
            $anyError: false,
          },
          $axios: {
            $post: mockedAxios,
          },
          $notify: mockedNotify,
        },
      }
    );

  const validFormData = {
    forgotForm: {
      email: 'mail@mail.ri',
    },
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

  it('Prevent submit if form has errors', async () => {
    const wrapper = factory();
    await wrapper.vm.onSubmit(fakeEvent as Event);
    expect(wrapper.vm.isLoading).toEqual(false);
  });

  it('Make API call if form does not have errors', async () => {
    const mockAxiosGetResult = {
      success: true,
    };
    const mockedAxios = jest.fn().mockImplementationOnce(() => Promise.resolve(mockAxiosGetResult));
    const mockedNotify = jest.fn();
    const wrapper = validComponentWrapper(mockedAxios, mockedNotify);

    wrapper.setData(validFormData);

    await wrapper.vm.onSubmit(fakeEvent as Event);
    expect(mockedAxios).toHaveBeenCalled();
    expect(mockedNotify).toHaveBeenCalled();
    expect(wrapper.vm.isLoading).toEqual(false);
  });

  it('Does not show notification if API call return false', async () => {
    const fakeEvent = { preventDefault: () => {} };
    const mockAxiosGetResult = {
      success: false,
    };
    const mockedAxios = jest.fn().mockImplementationOnce(() => Promise.resolve(mockAxiosGetResult));
    const mockedNotify = jest.fn();
    const wrapper = validComponentWrapper(mockedAxios, mockedNotify);

    wrapper.setData(validFormData);

    await wrapper.vm.onSubmit(fakeEvent as Event);
    expect(mockedAxios).toHaveBeenCalled();
    expect(mockedNotify).not.toHaveBeenCalled();
    expect(wrapper.vm.isLoading).toEqual(false);
  });

  it('Show error notification if API call failed', async () => {
    const fakeEvent = { preventDefault: () => {} };
    const mockAxiosGetResult = {
      response: {
        data: {
          message: 'Something went wrong',
        },
      },
    };
    const mockedAxios = jest.fn().mockImplementationOnce(() => Promise.reject(mockAxiosGetResult));
    const mockedNotify = jest.fn();
    const wrapper = validComponentWrapper(mockedAxios, mockedNotify);

    wrapper.setData(validFormData);

    await wrapper.vm.onSubmit(fakeEvent as Event);
    expect(mockedAxios).toHaveBeenCalled();
    expect(mockedNotify).toHaveBeenCalled();
    expect(wrapper.vm.isLoading).toEqual(false);
  });
});
