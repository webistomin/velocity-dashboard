import Vue from 'vue';

type CSSClass =
  | string
  | {
      [key: string]: string;
    };

export class VueComponent<Props = {}> extends Vue {
  // @ts-ignore
  public $props: Props & {
    key?: string;
    class?: CSSClass | CSSClass[];
  };
}
