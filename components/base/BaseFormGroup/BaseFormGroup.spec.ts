import { mount } from '@vue/test-utils';
import BaseFormGroup from './BaseFormGroup';

describe('BaseFormGroup', () => {
  const inputSelector = "[data-jest='base-form-group__input']";
  const maskSelector = "[data-jest='base-form-group__mask']";
  const textareaSelector = "[data-jest='base-form-group__textarea']";
  const labelSelector = "[data-jest='base-form-group__label']";
  const errorSelector = "[data-jest='base-form-group__error']";

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
    const mask = wrapper.find(maskSelector);
    mask.trigger('input');
    expect(wrapper.emitted().input);
  });

  it('Set textarea height on input event', () => {
    const wrapper = factory({
      isTextarea: true,
    });
    const textareaEl = wrapper.vm.$refs.baseTextarea as HTMLTextAreaElement;
    const initialTextareaHeight = textareaEl.style.height;

    const textarea = wrapper.find(textareaSelector);
    textarea.setValue(
      `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged`
    );
    textarea.trigger('input');

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

  it('Add invalid class to input if it is invalid', () => {
    const expectedResult = ['base-form-group__input_invalid'];
    const wrapper = factory(
      {},
      {
        computed: {
          isInputInvalid: () => true,
        },
      }
    );
    const input = wrapper.find(inputSelector);
    const classes = input.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });

  it('Add invalid class to textarea if it is invalid', () => {
    const expectedResult = ['base-form-group__input_invalid'];
    const wrapper = factory(
      {
        isTextarea: true,
      },
      {
        computed: {
          isInputInvalid: () => true,
        },
      }
    );
    const input = wrapper.find(textareaSelector);
    const classes = input.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });

  it('Add invalid class to mask if it is invalid', () => {
    const expectedResult = ['base-form-group__input_invalid'];
    const wrapper = factory(
      {
        mask: '##/##/##',
      },
      {
        computed: {
          isInputInvalid: () => true,
        },
      }
    );
    const mask = wrapper.find(maskSelector);
    const classes = mask.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });

  it('Show error if array is not empty', () => {
    const wrapper = factory(
      {},
      {
        computed: {
          isInputInvalid: () => true,
          activeErrorMessages: {
            get() {
              return ['Error'];
            },
            set(value: string) {
              console.log(value);
            },
          },
        },
      }
    );
    const error = wrapper.find(errorSelector);
    expect(error.exists()).toBe(true);
  });
});
