import { mount } from '@vue/test-utils';
import BaseModal from './BaseModal';

describe('BaseModal', () => {
  const factory = (propsData = {}, options = {}) => {
    return mount(BaseModal, {
      propsData: {
        isVisible: false,
        ...propsData,
      },
      stubs: ['FocusTrap'],
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Emit close event', () => {
    const wrapper = factory();
    wrapper.vm.closeModal();
    expect(wrapper.emitted().close);
  });

  it('Close modal on "Esc"', () => {
    const mockedCloseModal = jest.fn();
    const wrapper = factory(
      {
        isVisible: true,
      },
      {
        attachToDocument: true,
        methods: {
          closeModal: mockedCloseModal,
        },
      }
    );
    wrapper.trigger('keydown.esc', { key: 'Escape' });
    expect(mockedCloseModal).toHaveBeenCalled();
  });

  it('Delete global event listeners on destroy', () => {
    const mockedCloseModal = jest.fn();
    const wrapper = factory(
      {
        isVisible: true,
      },
      {
        attachToDocument: true,
        methods: {
          closeModal: mockedCloseModal,
        },
      }
    );
    wrapper.destroy();
    wrapper.trigger('keydown.esc', { key: 'Escape' });
    expect(mockedCloseModal).not.toHaveBeenCalled();
  });
});
