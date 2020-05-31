import { mount } from '@vue/test-utils';
import { BaseBadge } from './BaseBadge';

describe('BaseBadge', () => {
  it('Matches snapshot', () => {
    const wrapper = mount(BaseBadge).html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Set class from color prop', () => {
    const expectedResult = ['base-badge_color_blue'];
    const wrapper = mount(BaseBadge, {
      propsData: {
        color: 'blue',
      },
    });
    const classes = wrapper.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });

  it('Set default class if color prop is not provided', () => {
    const expectedResult = ['base-badge_color_default'];
    const wrapper = mount(BaseBadge);
    const classes = wrapper.classes();
    expect(classes).toEqual(expect.arrayContaining(expectedResult));
  });

  it('Set badge text correctly', () => {
    const expected = '123';
    // @ts-ignore cause doesn't understand Vue functional TSX syntax yet
    const wrapper = mount(BaseBadge, {
      context: {
        children: [expected],
      },
    });
    expect(wrapper.text()).toEqual(expected);
  });
});
