import Vue from 'vue';
import { LMap, LTileLayer, LCircle, LCircleMarker, LMarker, LPolyline, LIcon } from 'vue2-leaflet';
import { Icon } from 'leaflet';
// @ts-ignore
import Vue2LeafletMarkercluster from 'vue2-leaflet-markercluster';
// @ts-ignore
import LHotline from './LHotline.vue';

Vue.component('L-Map', LMap);
Vue.component('L-Tile-Layer', LTileLayer);
Vue.component('L-Circle', LCircle);
Vue.component('L-Circle-Marker', LCircleMarker);
Vue.component('L-Marker', LMarker);
Vue.component('L-Polyline', LPolyline);
Vue.component('L-Icon', LIcon);
Vue.component('L-Marker-Cluster', Vue2LeafletMarkercluster);
Vue.component('L-Hotline', LHotline);

// @ts-ignore
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconUrl: require('../../../static/img/map-marker.svg'),
  iconRetinaUrl: require('../../../static/img/map-marker.svg'),
  shadowUrl: '',
  iconSize: [24, 24],
  shadowSize: [0, 0],
  iconAnchor: [12, 12],
});
