import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import Vehicles from 'components/ui/Vehicles';
import { Context } from '@nuxt/types';
import { serverUrls } from 'common/urls/serverUrls';
import { IPageVehicles, IPageVehiclesResponse } from 'common/types/pages/vehicles';

@Component({
  name: 'VehiclesPage',
  middleware: ['auth-guard', 'auth-admin'],
})
export default class VehiclesPage extends VueComponent {
  public content: IPageVehicles | null = null;

  public head() {
    return {
      title: 'Velocity :: Vehicles',
    };
  }

  public async asyncData(context: Context) {
    try {
      const data: IPageVehiclesResponse = await context.$axios.$get(serverUrls.pages.vehicles);
      return { content: data.content };
    } catch (error) {
      console.log(error);
    }
  }

  render(): VNode {
    return (
      <main class='page-content page-content_offset-top'>
        <Vehicles content={this.content} />
      </main>
    );
  }
}
