import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuelidate from 'vuelidate';
import VueRouter from 'vue-router';
import LoginResetPassword from './LoginResetPassword';

describe('LoginResetPassword', () => {
  const localVue = createLocalVue();
  localVue.use(Vuelidate);
  localVue.use(VueRouter);
  const router = new VueRouter();

  const factory = (propsData = {}, options = {}) => {
    return shallowMount(LoginResetPassword, {
      localVue,
      router,
      propsData: {
        ...propsData,
      },
      ...options,
    });
  };

  const validComponentWrapper = (mockedAxios: any, mockedNotify: any) =>
    factory(
      {},
      {
        beforeCreate() {
          this._route = {
            params: {
              token: 'token123',
            },
          };
        },
        mocks: {
          $v: {
            resetForm: {
              password: {
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
    resetForm: {
      password: '123',
      token: 'Bearer 456',
    },
  };

  const fakeEvent = { preventDefault: () => {} };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
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
