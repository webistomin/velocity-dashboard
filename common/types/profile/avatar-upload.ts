import { Readable } from 'stream';
import { Request } from 'express';

export interface IMulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  stream: Readable;
  destination: string;
  filename: string;
  path: string;
  buffer: Buffer;
}

export interface IMulterS3File extends IMulterFile {
  bucket: string;
  key: string;
  acl: string;
  contentType: string;
  contentDisposition: null;
  storageClass: string;
  serverSideEncryption: null;
  metadata: any;
  location: string;
  etag: string;
}

export interface IUploadAvatarRequest extends Request {
  file: IMulterS3File;
}

export interface IUploadAvatarResponseBody {
  success: boolean;
  message: string;
  avatar?: string;
}
