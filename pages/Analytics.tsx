import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import Analytics from 'components/ui/Analytics';
import { Context } from '@nuxt/types';
import { serverUrls } from 'common/urls/serverUrls';
import { IPageAnalytics, IPageAnalyticsResponse } from 'common/types/pages/analytics';

@Component({
  name: 'AnalyticsPage',
  middleware: ['auth-guard', 'auth-admin'],
})
export default class AnalyticsPage extends VueComponent {
  public content: IPageAnalytics | null = null;

  public head() {
    return {
      title: 'Velocity:: Analytics',
    };
  }

  public async asyncData(context: Context) {
    try {
      const data: IPageAnalyticsResponse = await context.$axios.$get(serverUrls.pages.analytics);
      return { content: data.content };
    } catch (error) {
      console.log(error);
    }
  }

  render(): VNode {
    return (
      <main class='page-content page-content_offset'>
        <Analytics content={this.content} />
      </main>
    );
  }
}
