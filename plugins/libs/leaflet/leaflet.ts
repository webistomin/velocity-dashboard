import Vue from 'vue';
import { LMap, LTileLayer, LCircle, LCircleMarker, LMarker, LPolyline } from 'vue2-leaflet';
import { Icon } from 'leaflet';
import Vue2LeafletMarkercluster from 'vue2-leaflet-markercluster';
import LHotline from './LHotline.vue';

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
  iconUrl: require('../../../static/img/map-marker.svg'),
  iconRetinaUrl: require('../../../static/img/map-marker.svg'),
  shadowUrl: '',
  iconSize: [24, 24],
  shadowSize: [0, 0],
  iconAnchor: [12, 12],
});
