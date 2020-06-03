import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import HTTPStatuses from 'http-status-codes';

import NotFound from 'components/ui/NotFound';

export interface INuxtError {
  message: string;
  path: string;
  statusCode: number;
}

export interface IErrorLayoutProps {
  error: INuxtError;
}

@Component({
  name: 'ErrorLayout',
  layout: 'clean',
})
export default class ErrorLayout extends VueComponent<IErrorLayoutProps> {
  @Prop()
  private readonly error!: IErrorLayoutProps['error'];

  public mounted(): void {
    console.log(this.error);
  }

  public render(): VNode | null {
    return this.error.statusCode === HTTPStatuses.NOT_FOUND ? <NotFound /> : null;
  }
}
