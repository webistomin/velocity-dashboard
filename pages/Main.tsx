import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import { Context } from '@nuxt/types';

import Overview from 'components/ui/Overview';
import { serverUrls } from 'common/urls/serverUrls';
import { IPageHome, IPageHomeResponse } from 'common/types/pages/home';

@Component({
  name: 'MainPage',
  middleware: ['auth-guard'],
})
export default class MainPage extends VueComponent {
  public content: IPageHome | null = null;

  public head() {
    return {
      title: 'Velocity:: Home',
    };
  }

  public async asyncData(context: Context) {
    try {
      const data: IPageHomeResponse = await context.$axios.$get(serverUrls.pages.home);
      return { content: data.content };
    } catch (error) {
      console.log(error);
    }
  }

  render(): VNode {
    return (
      <main class='page-content page-content_offset'>
        <Overview content={this.content} />
      </main>
    );
  }
}
