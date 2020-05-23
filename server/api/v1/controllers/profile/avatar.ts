import { Response } from 'express';
import HTTPStatuses from 'http-status-codes';

import User from 'server/models/user/user';
import { IUploadAvatarResponseBody, IUploadAvatarRequest, IMulterS3File } from 'common/types/profile/avatar-upload';

export default async (req: IUploadAvatarRequest, res: Response<IUploadAvatarResponseBody>) => {
  const file: IMulterS3File = req.file;
  const { _id } = req.body;
  try {
    await User.findOneAndUpdate(
      { _id },
      {
        avatar: file.location,
      }
    );
    return res.json({
      success: true,
      message: 'Avatar has been updated',
      avatar: file.location,
    });
  } catch (error) {
    return res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};
