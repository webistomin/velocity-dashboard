import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import { TripTypes } from 'common/types/trip/trip-types';
import { TripStatus } from 'common/types/trip/trip-status';
import Map from './Map';

describe('Map', () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  const router = new VueRouter();

  const factory = (propsData = {}, options = {}) => {
    return shallowMount(Map, {
      localVue,
      router,
      propsData: {
        content: {
          trips: [
            {
              _id: 'abc123',
              __v: 0,
              passengerId: '1',
              driverId: '1',
              paymentDetails: {
                type: 'visa',
              },
              trip: {
                type: TripTypes.COMFORT,
                distance: 15,
                approximateTime: 13,
                price: 8,
                startAddress: '290  Eden Drive, Richmond, VA',
                endAddress: '4503  Orchard Street, Richmond, VA',
                startTime: 'Tue Jun 02 2020 10:47:47 GMT+0300 (Москва, стандартное время)',
                endTime: null,
              },
              path: [
                {
                  lat: 50.516518,
                  lng: 6.993713,
                },
                {
                  lat: 50.516566,
                  lng: 6.993747,
                },
                {
                  lat: 50.516566,
                  lng: 6.993747,
                },
                {
                  lat: 50.516582,
                  lng: 6.993847,
                },
                {
                  lat: 50.516574,
                  lng: 6.99392,
                },
                {
                  lat: 50.516574,
                  lng: 6.994007,
                },
                {
                  lat: 50.51657,
                  lng: 6.994085,
                },
                {
                  lat: 50.516551,
                  lng: 6.994153,
                },
                {
                  lat: 50.516536,
                  lng: 6.994224,
                },
                {
                  lat: 50.516521,
                  lng: 6.994309,
                },
                {
                  lat: 50.516507,
                  lng: 6.994385,
                },
                {
                  lat: 50.516485,
                  lng: 6.994459,
                },
                {
                  lat: 50.516465,
                  lng: 6.994526,
                },
                {
                  lat: 50.516444,
                  lng: 6.994602,
                },
                {
                  lat: 50.516403,
                  lng: 6.994652,
                },
                {
                  lat: 50.516386,
                  lng: 6.994722,
                },
                {
                  lat: 50.516333,
                  lng: 6.994762,
                },
                {
                  lat: 50.516276,
                  lng: 6.99481,
                },
                {
                  lat: 50.516223,
                  lng: 6.994854,
                },
                {
                  lat: 50.51617,
                  lng: 6.994882,
                },
                {
                  lat: 50.516122,
                  lng: 6.994915,
                },
                {
                  lat: 50.516076,
                  lng: 6.994951,
                },
                {
                  lat: 50.516028,
                  lng: 6.994998,
                },
                {
                  lat: 50.515983,
                  lng: 6.995041,
                },
                {
                  lat: 50.515936,
                  lng: 6.99509,
                },
                {
                  lat: 50.515889,
                  lng: 6.995134,
                },
                {
                  lat: 50.515863,
                  lng: 6.995193,
                },
                {
                  lat: 50.515861,
                  lng: 6.995203,
                },
                {
                  lat: 50.515902,
                  lng: 6.995251,
                },
                {
                  lat: 50.515948,
                  lng: 6.995238,
                },
                {
                  lat: 50.515999,
                  lng: 6.995237,
                },
                {
                  lat: 50.515962,
                  lng: 6.995287,
                },
                {
                  lat: 50.515915,
                  lng: 6.995296,
                },
                {
                  lat: 50.51586,
                  lng: 6.995298,
                },
                {
                  lat: 50.515815,
                  lng: 6.995294,
                },
              ],
              status: TripStatus.IN_PROGRESS,
            },
          ],
        },
        ...propsData,
      },
      ...options,
    });
  };

  beforeAll(() => {
    Object.defineProperty(window.HTMLMediaElement.prototype, 'play', {
      configurable: true,
      get() {
        return () => {};
      },
      set() {
        return () => {};
      },
    });

    Object.defineProperty(window.HTMLMediaElement.prototype, 'pause', {
      configurable: true,
      get() {
        return () => {};
      },
      set() {
        return () => {};
      },
    });
  });

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Set trip id if it exists in params', () => {
    const wrapper = factory(
      {},
      {
        beforeCreate() {
          this._route = {
            params: {
              id: 1,
            },
          };
        },
      }
    );
    expect(wrapper.vm.currentTripId).toEqual(1);
  });

  it('Open video modal', () => {
    const wrapper = factory();
    wrapper.vm.onVideoClick();
    expect(wrapper.vm.isVideoModalVisible).toEqual(true);
  });

  it('Close video modal', () => {
    const wrapper = factory();
    wrapper.vm.onVideoClose();
    expect(wrapper.vm.isVideoModalVisible).toEqual(false);
  });

  it('If click on same marker – set currentTrip to null', () => {
    const wrapper = factory();
    wrapper.setData({
      currentTripId: '1',
    });
    wrapper.vm.onMarkerClick('1');
    expect(wrapper.vm.currentTripId).toEqual(null);
  });

  it('Set currentTrip on marker click', () => {
    const wrapper = factory();
    wrapper.setData({
      currentTripId: null,
    });
    wrapper.vm.onMarkerClick('1');
    expect(wrapper.vm.currentTripId).toEqual('1');
  });

  it('Return undefined if no trips provided', () => {
    const wrapper = factory({
      content: null,
    });
    const result = wrapper.vm.getCurrentTrip;
    expect(result).toEqual(undefined);
  });

  it('Return undefined if no trip id provided', () => {
    const wrapper = factory({
      content: null,
    });
    const result = wrapper.vm.getCurrentTripInfo;
    expect(result).toEqual(undefined);
  });

  it('Return trip info if trip with provided id exists', () => {
    const wrapper = factory();
    wrapper.setData({
      currentTripId: 'abc123',
    });
    const result = wrapper.vm.getCurrentTripInfo;
    const expected = {
      id: 'abc123',
      type: TripTypes.COMFORT,
      distance: 15,
      approximateTime: 13,
      price: 8,
      startAddress: '290  Eden Drive, Richmond, VA',
      endAddress: '4503  Orchard Street, Richmond, VA',
    };
    expect(result).toEqual(expected);
  });
});
