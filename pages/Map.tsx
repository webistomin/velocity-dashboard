import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import { Context } from '@nuxt/types';

import Map from 'components/ui/Map';
import { serverUrls } from 'common/urls/serverUrls';
import { IPageMap, IPageMapResponse } from 'common/types/pages/map';

@Component({
  name: 'MapPage',
  middleware: ['auth-guard', 'auth-admin'],
})
export default class MapPage extends VueComponent {
  public content: IPageMap | null = null;

  public head() {
    return {
      title: 'Velocity:: Map',
    };
  }

  public async asyncData(context: Context) {
    try {
      const data: IPageMapResponse = await context.$axios.$get(serverUrls.pages.map);
      return { content: data.content };
    } catch (error) {
      console.log(error);
    }
  }

  public render(): VNode {
    return (
      <main class='page-content page-content_offset-bottom'>
        <Map content={this.content} />
      </main>
    );
  }
}
