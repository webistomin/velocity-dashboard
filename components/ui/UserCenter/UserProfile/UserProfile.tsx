import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';
// @ts-ignore
import AvatarCropper from 'vue-anka-cropper';
import { State } from 'vuex-class';

import { BaseThumbnail } from 'components/base/BaseThumbnail/BaseThumbnail';
import { BaseTitle } from 'components/base/BaseTitle/BaseTitle';
import BaseButton from 'components/base/BaseButton';
import { IUserInterface, IUserInterfaceDB } from 'common/types/user/user-schema';
import { UserRoles } from 'common/types/user/user-roles';
import BaseModal from 'components/base/BaseModal';
import { serverUrls } from 'common/urls/serverUrls';
import { BaseSpinner } from 'components/base/BaseSpinner/BaseSpinner';
import { IUploadAvatarResponseBody } from 'common/types/profile/avatar-upload';

import 'node_modules/vue-anka-cropper/dist/VueAnkaCropper.css';
import './UserProfile.sass';

export interface IUserProfileProps {
  info: IUserProfileInfo;
}

export interface IUserProfileInfo {
  firstName: IUserInterface['firstName'];
  lastName: IUserInterface['lastName'];
  email: IUserInterface['email'];
  location: IUserInterface['location'];
  bio: IUserInterface['bio'];
  avatar: IUserInterface['avatar'];
  role: IUserInterface['role'];
}

@Component({
  name: 'UserProfile',
  components: { AvatarCropper },
})
export default class UserProfile extends VueComponent<IUserProfileProps> {
  public isAvatarCropperVisible: boolean = false;
  public isLoading: boolean = false;

  @Prop()
  private readonly info!: IUserProfileProps['info'];

  public async logoutHandler(): Promise<void> {
    try {
      await this.$auth.logout();
    } catch (e) {
      this.$notify({
        group: 'common',
        type: 'error',
        title: 'Error during logout',
        text: e.message,
        duration: 3000,
      });
    }
  }

  public get getFullRoleName() {
    const role = this.info.role;

    switch (role) {
      case UserRoles.OPERATOR:
        return 'Operator';
      case UserRoles.ADMIN:
        return 'Administrator';
      default:
        return 'Not specified';
    }
  }

  public showAvatarCropper(): void {
    this.isAvatarCropperVisible = true;
  }

  public closeAvatarCropper(): void {
    this.isAvatarCropperVisible = false;
  }

  @State((state) => state.auth.user)
  getAuthUser!: IUserInterfaceDB;

  public async onAvatarUpload(data: any): Promise<void> {
    const newAvatarBlob = data.croppedFile;

    const formData = new FormData();
    formData.append('file', newAvatarBlob);
    formData.append('_id', this.getAuthUser._id);

    try {
      this.isLoading = true;
      const response: IUploadAvatarResponseBody = await this.$axios.$post(serverUrls.profile.uploadAvatar, formData);

      if (response.success) {
        await this.$auth.fetchUser();
        this.closeAvatarCropper();
        this.$notify({
          group: 'common',
          type: 'success',
          title: 'Success',
          text: 'Avatar has been successfully changed',
          duration: 3000,
        });
      }
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
      const data: IUploadAvatarResponseBody = error.response.data;
      this.$notify({
        group: 'common',
        type: 'error',
        title: 'Success',
        text: data.message,
        duration: 3000,
      });
    }
  }

  render(): VNode {
    const { avatar, firstName, lastName, bio, location, email } = this.info;
    const fullName = `${firstName} ${lastName}`;

    return (
      <div class='user-profile'>
        <div class='user-profile__heading'>
          <BaseModal
            class='user-profile__avatar-modal'
            isVisible={this.isAvatarCropperVisible}
            v-scroll-lock={this.isAvatarCropperVisible}
            onClose={() => this.closeAvatarCropper()}>
            {this.isLoading ? (
              <BaseSpinner size='m' />
            ) : (
              <AvatarCropper
                class='user-profile__avatar-cropper'
                onCropper-saved={(cropData: any) => this.onAvatarUpload(cropData)}
                options={{
                  aspectRatio: 1,
                  closeOnSave: true,
                  cropArea: 'circle',
                  croppedHeight: 140,
                  croppedWidth: 140,
                  cropperHeight: false,
                  dropareaMessage: 'Drop file here or use the button below.',
                  frameLineDash: [5, 3],
                  frameStrokeColor: 'rgba(255, 255, 255, 0.8)',
                  handleFillColor: 'rgba(255, 255, 255, 0.2)',
                  handleHoverFillColor: 'rgba(255, 255, 255, 0.4)',
                  handleHoverStrokeColor: 'rgba(255, 255, 255, 1)',
                  handleSize: 10,
                  handleStrokeColor: 'rgba(255, 255, 255, 0.8)',
                  layoutBreakpoint: 850,
                  maxCropperHeight: 768,
                  maxFileSize: 8000000,
                  overlayFill: 'rgba(0, 0, 0, 0.5)',
                  previewOnDrag: true,
                  previewQuality: 0.65,
                  resultQuality: 0.8,
                  resultMimeType: 'image/jpeg',
                  selectButtonLabel: 'Select Files',
                  showPreview: true,
                  skin: 'light',
                  uploadData: {},
                  uploadTo: false,
                }}
              />
            )}
          </BaseModal>
          <div class='user-profile__avatar-block'>
            <button type='button' class='user-profile__avatar-changer btn' onClick={this.showAvatarCropper}>
              Change avatar
            </button>
            <BaseThumbnail id='profile-avatar' class='user-profile__avatar' image={avatar} alt={fullName} size='xl' />
          </div>
          <BaseTitle class='user-profile__title' level={3}>
            {fullName}
          </BaseTitle>
          <strong class='user-profile__post'>{this.getFullRoleName}</strong>
          <div class='user-profile__actions'>
            <BaseButton theme='light' onClick={this.logoutHandler}>
              Logout
            </BaseButton>
          </div>
        </div>
        <ul class='user-profile__list list'>
          <li class='user-profile__item list-item' vShow={email}>
            <strong class='user-profile__key caption'>Email</strong>
            <span class='user-profile__value'>{email}</span>
          </li>
          <li class='user-profile__item list-item' vShow={location}>
            <strong class='user-profile__key caption'>Location</strong>
            <span class='user-profile__value'>{location}</span>
          </li>
          <li class='user-profile__item list-item' vShow={bio}>
            <strong class='user-profile__key caption'>Bio</strong>
            <span class='user-profile__value'>{bio}</span>
          </li>
        </ul>
      </div>
    );
  }
}
