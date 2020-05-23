import ownProfileController from './own';
import updateProfileController from './update';
import uploadAvatarController from './avatar';

export const profileControllers = {
  own: ownProfileController,
  update: updateProfileController,
  uploadAvatar: uploadAvatarController,
};
