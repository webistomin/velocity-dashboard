import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';

import './BaseMap.sass';

@Component({
  name: 'BaseMap',
})
export default class BaseMap extends VueComponent {
  url: string = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png';
  travel = [
    [145.0, 175.2],
    [8.3, 218.7],
  ];

  render() {
    return (
      <client-only>
        <L-Map zoom={10} center={[55.751244, 37.618423]} class='base-map'>
          <L-Tile-Layer url={this.url} subdomains='abcd' maxZoom={20} />
          <L-Marker-Cluster
            options={{
              showCoverageOnHover: false,
            }}>
            <L-Marker lat-lng={[55.751244, 37.618423]} />
            <L-Marker lat-lng={[55.851244, 37.618423]} />
            <L-Marker lat-lng={[55.851244, 37.118423]} />
          </L-Marker-Cluster>
          <L-Hotline
            weight={2}
            outline-width={0}
            outline-color={'#2E5BFF'}
            palette={{
              0.0: '#2E5BFF',
              0.5: '#2E5BFF',
              1.0: '#2E5BFF',
            }}
            latLngs={[
              [55.751244, 37.618423, 1],
              [55.851244, 37.618423, 1],
              [55.851244, 37.118423, 1],
            ]}
          />
        </L-Map>
      </client-only>
    );
  }
}
