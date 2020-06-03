import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuelidate from 'vuelidate';
import { FormTypes } from 'components/ui/Login/Login';
import LoginSignIn from './LoginSignIn';

describe('LoginSignIn', () => {
  const localVue = createLocalVue();
  localVue.use(Vuelidate);
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(LoginSignIn, {
      localVue,
      propsData: {
        ...propsData,
      },
      ...options,
    });
  };

  const validFormData = {
    signInForm: {
      email: 'mail@mail.ri',
      password: '123',
    },
  };

  const validComponentWrapper = (mockedAxios: jest.Mock<any, any>, mockedNotify: jest.Mock<any, any>) =>
    factory(
      {},
      {
        mocks: {
          $v: {
            signInForm: {
              email: {
                $touch: () => {},
              },
              password: {
                $touch: () => {},
              },
            },
            $touch: () => {},
            $anyError: false,
          },
          $auth: {
            loginWith: mockedAxios,
          },
          $notify: mockedNotify,
        },
      }
    );

  const fakeEvent = { preventDefault: () => {} };

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
    expect(wrapper.vm.isLoading).toEqual(false);
  });

  it('Does not show notification if API call return false', async () => {
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
