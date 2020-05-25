// Global styles
import '../assets/sass/main.sass';

import Vue from 'vue';

import { addDecorator } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-vue-router';

import Vuelidate from 'vuelidate';
import VuelidateErrorExtractor from 'vuelidate-error-extractor';
import VLazyImage from 'v-lazy-image';
import BaseFormGroup from '@/components/base/BaseFormGroup';
import { LMap, LTileLayer, LCircle, LCircleMarker, LMarker, LPolyline } from 'vue2-leaflet';
import { Icon } from 'leaflet';
import Vue2LeafletMarkercluster from 'vue2-leaflet-markercluster';
import LHotline from '@/plugins/libs/leaflet/LHotline.vue';
import vSelect from 'vue-select';
import VueSlider from 'vue-slider-component';

import 'vue-slider-component/dist-css/vue-slider-component.css';
import 'vue-slider-component/theme/default.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'vue-select/dist/vue-select.css';

Vue.component('VLazyImage', VLazyImage);
Vue.use(Vuelidate);
Vue.component('BaseFormGroup', BaseFormGroup);
Vue.use(VuelidateErrorExtractor, {
  messages: {
    required: 'The {attribute} field is required',
    email: 'Email is invalid',
  },
});

// implement router-link
addDecorator(StoryRouter());

// simple implementation of nuxt-link
Vue.component('NuxtLink', {
  props: {
    to: {
      type: String,
      default: '',
    },
  },
  template: '<a :href="to"><slot/></a>',
});

// simple implementation of client-only
Vue.component('ClientOnly', {
  template: `<div :style="{height: '100%'}"><slot/></div>`,
});

// JSX
addDecorator(() => ({
  render() {
    return (
      <div id='app'>
        <story />
      </div>
    );
  },
}));

// Escape characters
addDecorator(
  withKnobs({
    escapeHTML: false,
  })
);

// Svg-icon component
Vue.component('SvgIcon', {
  template:
    '<svg xmlns="http://www.w3.org/2000/svg" width="13.601" height="16.625" viewBox="0 0 13.601 16.625"><path d="M4.785,16.625a.756.756,0,0,1-.729-.955l1.252-4.587H.755A.756.756,0,0,1,.1,9.949L5.642.377A.759.759,0,0,1,6.3,0h4.535a.756.756,0,0,1,.637,1.162L8.681,5.541h4.165a.756.756,0,0,1,.578,1.243L5.363,16.356A.754.754,0,0,1,4.785,16.625ZM6.733,1.511h0L2.065,9.572H6.3a.755.755,0,0,1,.729.954l-.608,2.233,4.8-5.706H7.3a.755.755,0,0,1-.638-1.161L9.455,1.511H6.733Z"/></svg>',
});

Vue.component('L-Map', LMap);
Vue.component('L-Tile-Layer', LTileLayer);
Vue.component('L-Circle', LCircle);
Vue.component('L-Circle-Marker', LCircleMarker);
Vue.component('L-Marker', LMarker);
Vue.component('L-Polyline', LPolyline);
Vue.component('L-Marker-Cluster', Vue2LeafletMarkercluster);
Vue.component('L-Hotline', LHotline);

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconUrl: '/img/map-marker.svg',
  iconRetinaUrl: '/img/map-marker.svg',
  shadowUrl: '',
  iconSize: [24, 24],
  shadowSize: [0, 0],
  iconAnchor: [12, 12],
});

Vue.component('VSelect', vSelect);

Vue.component('VueSlider', VueSlider);
