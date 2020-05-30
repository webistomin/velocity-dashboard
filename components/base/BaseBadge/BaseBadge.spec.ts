import { mount } from '@vue/test-utils';
import { BaseBadge } from './BaseBadge';

describe('BaseBadge', () => {
  it('Matches snapshot', () => {
    const vm = mount(BaseBadge).html();
    expect(vm).toMatchSnapshot();
  });

  it('Set class from color prop', () => {
    const expectedResult = ['base-badge_color_blue'];
    const vm = mount(BaseBadge, {
      propsData: {
        color: 'blue',
      },
    });
    const colors = vm.classes();
    expect(colors).toEqual(expect.arrayContaining(expectedResult));
  });

  it('Set default class if color prop is not provided', () => {
    const expectedResult = ['base-badge_color_default'];
    const vm = mount(BaseBadge);
    const colors = vm.classes();
    expect(colors).toEqual(expect.arrayContaining(expectedResult));
  });

  it('Set badge text correctly', () => {
    const expected = '123';
    // @ts-ignore cause doesn't understand TSX syntax yet
    const vm = mount(BaseBadge, {
      context: {
        children: [expected],
      },
    });
    expect(vm.text()).toEqual(expected);
  });
});
