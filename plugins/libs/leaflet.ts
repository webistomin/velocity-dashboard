import Vue from 'vue';
import { LMap, LTileLayer, LCircle, LCircleMarker, LMarker } from 'vue2-leaflet';
import { Icon } from 'leaflet';
import Vue2LeafletMarkercluster from 'vue2-leaflet-markercluster';

Vue.component('L-Map', LMap);
Vue.component('L-Tile-Layer', LTileLayer);
Vue.component('L-Circle', LCircle);
Vue.component('L-Circle-Marker', LCircleMarker);
Vue.component('L-Marker', LMarker);
Vue.component('L-Marker-Cluster', Vue2LeafletMarkercluster);

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconUrl: require('../../static/img/map-marker.svg'),
  iconRetinaUrl: require('../../static/img/map-marker.svg'),
  shadowUrl: '',
  iconSize: [24, 24],
});
