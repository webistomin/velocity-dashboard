import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

@Component({
  name: 'MapVideo',
})
export default class MapVideo extends VueComponent {
  render(): VNode {
    return (
      <div class='map__video'>
        <button class='map__video-play-btn btn'>
          <img class='map__video-play-image image' src='/img/interior.jpg' alt='Video' />
          <svg-icon name='icon-play' width={18} height={20} />
        </button>
        <div class='map__video-content'>
          <div class='map__video-info'>
            <strong class='map__video-name'>Activate interior video</strong>
            <span class='map__video-place'>37-27 74th Street</span>
          </div>
          <img class='map__video-camera image' src='/img/camera.svg' width={24} height={24} alt='Camera' />
        </div>
      </div>
    );
  }
}
