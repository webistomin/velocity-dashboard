import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import { nanoid } from 'nanoid';
import config from 'server/config';

aws.config.update({
  secretAccessKey: config.aws.secretKey,
  accessKeyId: config.aws.accessKey,
});

const s3 = new aws.S3();

export const uploadAvatarMiddleware = multer({
  storage: multerS3({
    s3,
    bucket: config.aws.bucketName || '',
    acl: 'public-read',
    metadata: (_req, file, cb) => {
      cb(null, {
        fieldName: file.fieldname,
      });
    },
    key: (_req, _file, cb) => {
      cb(null, `${config.aws.avatarsFolder}${nanoid()}.jpeg`);
    },
  }),
});
