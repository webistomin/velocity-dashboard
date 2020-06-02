import { shallowMount } from '@vue/test-utils';
import NotificationCenterItem, { NotificationCenterItemTypes } from './NotificationCenterItem';

describe('NotificationCenterItem', () => {
  const factory = (propsData = {}, options = {}) => {
    return shallowMount(NotificationCenterItem, {
      propsData: {
        type: NotificationCenterItemTypes.MESSAGE,
        text: '',
        time: 1591086090152,
        id: '1',
        isNew: true,
        ...propsData,
      },
      stubs: ['nuxt-link'],
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Return "icon-bubble" for message notification', () => {
    const wrapper = factory({
      type: NotificationCenterItemTypes.MESSAGE,
    });
    const result = wrapper.vm.getIconName;
    expect(result).toEqual('icon-bubble');
  });

  it('Return "icon-mail" for application notification', () => {
    const wrapper = factory({
      type: NotificationCenterItemTypes.APPLICATION,
    });
    const result = wrapper.vm.getIconName;
    expect(result).toEqual('icon-mail');
  });

  it('Return "icon-lightning" for complaint notification', () => {
    const wrapper = factory({
      type: NotificationCenterItemTypes.COMPLAINT,
    });
    const result = wrapper.vm.getIconName;
    expect(result).toEqual('icon-lightning');
  });

  it('Return "icon-mail" by default', () => {
    const wrapper = factory({
      type: '',
    });
    const result = wrapper.vm.getIconName;
    expect(result).toEqual('icon-mail');
  });
});
