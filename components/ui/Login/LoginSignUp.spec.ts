import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuelidate from 'vuelidate';
import { FormTypes } from 'components/ui/Login/Login';
import { UserRoles } from 'common/types/user/user-roles';
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

  const validFormData = {
    signUpForm: {
      firstName: '1',
      lastName: '2',
      email: '3',
      password: '4',
      role: UserRoles.OPERATOR,
    },
  };

  const validComponentWrapper = (
    mockedAxios: jest.Mock<any, any>,
    mockedNotify: jest.Mock<any, any>,
    mockedAuth: jest.Mock<any, any>
  ) =>
    factory(
      {},
      {
        mocks: {
          $v: {
            signUpForm: {
              firstName: {
                $touch: () => {},
              },
              lastName: {
                $touch: () => {},
              },
              email: {
                $touch: () => {},
              },
              password: {
                $touch: () => {},
              },
              role: {
                $touch: () => {},
              },
            },
            $touch: () => {},
            $anyError: false,
          },
          $axios: {
            $post: mockedAxios,
          },
          $auth: {
            loginWith: mockedAuth,
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
    const mockedAuth = jest.fn().mockImplementationOnce(() => Promise.resolve({}));
    const mockedNotify = jest.fn();
    const wrapper = validComponentWrapper(mockedAxios, mockedNotify, mockedAuth);
    wrapper.setData(validFormData);

    await wrapper.vm.onSubmit(fakeEvent as Event);
    expect(mockedAxios).toHaveBeenCalled();
    expect(mockedAuth).toHaveBeenCalled();
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
    const mockedAuth = jest.fn().mockImplementationOnce(() => Promise.resolve({}));
    const mockedNotify = jest.fn();
    const wrapper = validComponentWrapper(mockedAxios, mockedNotify, mockedAuth);
    wrapper.setData(validFormData);

    await wrapper.vm.onSubmit(fakeEvent as Event);
    expect(mockedAxios).toHaveBeenCalled();
    expect(mockedNotify).toHaveBeenCalled();
    expect(mockedAuth).not.toHaveBeenCalled();
    expect(wrapper.vm.isLoading).toEqual(false);
  });
});
