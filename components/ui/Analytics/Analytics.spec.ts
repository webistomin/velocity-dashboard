import { shallowMount } from '@vue/test-utils';
import { ANALYTICS_PAGE_MOCKED_RESPONSE } from 'server/mocks/analytics-page';
import Analytics from './Analytics';

describe('Analytics UI', () => {
  const BaseBarGraphSelector = 'basebargraph-stub';
  const BaseListSelector = 'baselist-stub';

  const factory = (propsData = {}, options = {}) => {
    return shallowMount(Analytics, {
      propsData: {
        content: {
          ...ANALYTICS_PAGE_MOCKED_RESPONSE(),
          vehiclesOnTrack: {
            todayCount: 1,
          },
          distanceDriven: {
            todayCount: 1,
          },
          energyConsumed: {
            todayCount: 1,
          },
          totalDriveTime: {
            todayCount: 1,
          },
        },
        ...propsData,
      },
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Return undefined if revenue is not provided', () => {
    const wrapper = factory({
      content: {
        ...ANALYTICS_PAGE_MOCKED_RESPONSE(),
        revenue: undefined,
      },
    });
    const revenue = wrapper.vm.getRevenueChartData;
    expect(revenue).toEqual(undefined);
  });

  it('Return undefined if trips by weekday are not provided', () => {
    const wrapper = factory({
      content: {
        ...ANALYTICS_PAGE_MOCKED_RESPONSE(),
        tripsByWeekday: undefined,
      },
    });
    const revenue = wrapper.vm.getTripsByWeekdayChartData;
    expect(revenue).toEqual(undefined);
  });

  it('Hide BaseBarGraph if trips by weekday are not provided', () => {
    const wrapper = factory({
      content: {
        ...ANALYTICS_PAGE_MOCKED_RESPONSE(),
        tripsByWeekday: undefined,
      },
    });
    const bar = wrapper.find(BaseBarGraphSelector);
    expect(bar.exists()).toBe(false);
  });

  // it('Show BaseBarGraph if  trips by weekday are provided', () => {
  //   const wrapper = factory();
  //   const bar = wrapper.find(BaseBarGraphSelector);
  //   expect(bar.exists()).toBe(true);
  // });

  it('Hide BaseList with trips if latest trips are not provided', () => {
    const wrapper = factory({
      content: {
        ...ANALYTICS_PAGE_MOCKED_RESPONSE(),
        latestTrips: undefined,
      },
    });
    const list = wrapper.find(BaseListSelector);
    expect(list.exists()).toBe(false);
  });

  // it('Show BaseList with trips if latest trips are provided', () => {
  //   const wrapper = factory();
  //   const list = wrapper.find(BaseListSelector);
  //   expect(list.exists()).toBe(true);
  // });
});
