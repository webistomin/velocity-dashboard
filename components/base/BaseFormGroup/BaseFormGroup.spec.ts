import { mount } from '@vue/test-utils';
import BaseFormGroup from './BaseFormGroup';

describe('BaseFormGroup', () => {
  const inputSelector = '.base-form-group__input';
  const textareaSelector = '.base-form-group__input.textarea';
  const labelSelector = '.base-form-group__label';

  const factory = (propsData = {}, options = {}) => {
    return mount(BaseFormGroup, {
      mocks: {
        $vuelidateErrorExtractor: {
          validationKeys: {},
        },
      },
      propsData: {
        value: '',
        validator: {
          required: true,
          email: true,
          $model: '',
          $invalid: true,
          $dirty: true,
          $anyDirty: true,
          $error: true,
          $anyError: true,
          $pending: false,
          $params: {
            required: {
              type: 'required',
            },
            email: {
              type: 'email',
            },
          },
        },
        ...propsData,
      },
      ...options,
      stubs: ['TheMask'],
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Emit "blur" event', () => {
    const wrapper = factory();
    const input = wrapper.find(inputSelector);
    input.trigger('blur');
    expect(wrapper.emitted().blur);
  });

  it('Emit "input" event', () => {
    const wrapper = factory();
    const input = wrapper.find(inputSelector);
    input.trigger('input');
    expect(wrapper.emitted().input);
  });

  it('emit "input" event using mask input', () => {
    const wrapper = factory({
      mask: '##/##/##',
    });
    const input = wrapper.find(inputSelector);
    input.trigger('input');
    expect(wrapper.emitted().input);
  });

  it('Set textarea height on input event', () => {
    const wrapper = factory({
      isTextarea: true,
    });
    const textareaEl = wrapper.vm.$refs.baseTextarea as HTMLTextAreaElement;
    const initialTextareaHeight = textareaEl.style.height;

    const input = wrapper.find(textareaSelector);
    input.setValue(
      `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged`
    );
    input.trigger('input');

    const newTextareaHeight = textareaEl.style.height;
    expect(initialTextareaHeight).not.toEqual(newTextareaHeight);
  });

  it('Set label if label prop is provided', () => {
    const expectedLabel = 'label';
    const wrapper = factory({
      label: expectedLabel,
    });
    const label = wrapper.find(labelSelector);
    expect(label.exists()).toBe(true);
    expect(label.text()).toEqual(expectedLabel);
  });

  it('Hide label if label prop is not provided', () => {
    const wrapper = factory();
    const label = wrapper.find(labelSelector);
    expect(label.exists()).toBe(false);
  });
});
