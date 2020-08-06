import { mount } from '@vue/test-utils';
import { SiteThemes } from 'common/types/theme/site-themes';
import BaseMap from './BaseMap';
import { trips } from './mocks/trips';

describe('BaseMap', () => {
  const factory = (propsData = {}, options = {}) => {
    return mount(BaseMap, {
      propsData: {
        trips,
        ...propsData,
      },
      stubs: [
        'nuxt-link',
        'client-only',
        'L-Map',
        'L-Tile-Layer',
        'L-Marker-Cluster',
        'L-Marker',
        'L-Icon',
        'L-Hotline',
        'svg-icon',
      ],
      ...options,
    });
  };

  it('Matches snapshot', () => {
    const wrapper = factory().html();
    expect(wrapper).toMatchSnapshot();
  });

  it('Set max zoom if prop "initialTripId" provided', () => {
    const wrapper = factory({
      initialTripId: 'id',
    });
    const zoom = wrapper.vm.zoomLevel;
    const maxZoom = 18;
    expect(zoom).toEqual(maxZoom);
  });

  it('Emit "markerClick" event on marker click', () => {
    const wrapper = factory();
    const marker = wrapper.find('l-marker-stub');
    marker.trigger('click');
    expect(wrapper.emitted().markerClick);
  });

  it('Call markerClick on marker keydown', () => {
    const wrapper = factory();
    const leafletEvent = {
      originalEvent: {
        key: 'Enter',
      },
    };
    // @ts-ignore
    wrapper.vm.onMarkerKeyDown(leafletEvent, 1);
    expect(wrapper.emitted().markerClick);
  });

  it('Doesnt not call markerClick on marker keydown if key is not enter', () => {
    const wrapper = factory();
    const leafletEvent = {
      originalEvent: {
        key: 'Esc',
      },
    };
    // @ts-ignore
    wrapper.vm.onMarkerKeyDown(leafletEvent, 1);
    expect(wrapper.emitted().markerClick).toEqual(undefined);
  });

  it('Close sidebar on "Esc"', () => {
    const mockedCloseSidebar = jest.fn();
    const wrapper = factory(
      {},
      {
        attachToDocument: true,
        methods: {
          closeSidebar: mockedCloseSidebar,
        },
      }
    );
    wrapper.setData({
      isSidebarVisible: true,
    });
    wrapper.trigger('keydown.esc', { key: 'Escape' });
    expect(mockedCloseSidebar).toHaveBeenCalled();
  });

  it('Delete global event listeners on destroy', () => {
    const mockedCloseSidebar = jest.fn();
    const wrapper = factory(
      {},
      {
        attachToDocument: true,
        methods: {
          closeSidebar: mockedCloseSidebar,
        },
      }
    );
    wrapper.setData({
      isSidebarVisible: true,
    });
    wrapper.destroy();
    wrapper.trigger('keydown.esc', { key: 'Escape' });
    expect(mockedCloseSidebar).not.toHaveBeenCalled();
  });

  it('Set sidebar visibility to false and current id to null on sidebar close', () => {
    const wrapper = factory();
    wrapper.vm.closeSidebar();

    const currentId = wrapper.vm.currentTripId;
    const isSidebarVisible = wrapper.vm.isSidebarVisible;

    expect(currentId).toEqual(null);
    expect(isSidebarVisible).toEqual(false);
  });

  it('Return default icon if no theme provided', () => {
    const wrapper = factory();
    const icon = wrapper.vm.getIcon;
    const result = {
      iconUrl: `/img/map-marker-shelob.svg`,
      iconRetinaUrl: `/img/map-marker-shelob.svg`,
      shadowUrl: '',
      iconSize: [24, 24],
      shadowSize: [0, 0],
      iconAnchor: [12, 12],
    };

    expect(icon).toEqual(result);
  });

  it('Return default primary color if process is not client', () => {
    const wrapper = factory();
    const primaryColor = wrapper.vm.getPrimaryColor;
    const result = 'rgb(46, 91, 255)';

    expect(primaryColor).toEqual(result);
  });

  it('Return color from document if process client', () => {
    (process as any).client = true;
    const wrapper = factory();
    const primaryColor = wrapper.vm.getPrimaryColor;
    const result = 'rgb(46, 91, 255)';
    (process as any).client = false;

    expect(primaryColor).toEqual(result);
  });

  it('Return default theme if process is not client', () => {
    (process as any).client = false;
    const wrapper = factory();
    const currentTheme = wrapper.vm.getCurrentTheme;
    const result = SiteThemes.SHELOB;

    expect(currentTheme).toEqual(result);
  });

  it('Return theme from local storage if process is client', () => {
    (process as any).client = true;
    const wrapper = factory();
    const currentTheme = wrapper.vm.getCurrentTheme;
    const result = null;
    (process as any).client = false;

    expect(currentTheme).toEqual(result);
  });

  it('Return trip info if trip exists', () => {
    const wrapper = factory({
      initialTripId: 'eV8QFGTSp4dywwyCqjsH7',
    });
    const currentTheme = wrapper.vm.getCurrentTripInfo;
    const result = {
      id: 'eV8QFGTSp4dywwyCqjsH7',
      type: 'comfort',
      distance: 15,
      approximateTime: 13,
      price: 8,
      startAddress: '290  Eden Drive, Richmond, VA',
      endAddress: '4503  Orchard Street, Richmond, VA',
    };

    expect(currentTheme).toEqual(result);
  });

  it('Return undefined info if trip does not exists', () => {
    const wrapper = factory({
      initialTripId: '312312312312312312',
    });
    const currentTheme = wrapper.vm.getCurrentTripInfo;
    const result = undefined;

    expect(currentTheme).toEqual(result);
  });

  it('Set null to current id if clicked on same marker', () => {
    const wrapper = factory({
      initialTripId: '1',
    });
    wrapper.vm.onMarkerClick('1');
    expect(wrapper.vm.currentTripId).toEqual(null);
  });
});
