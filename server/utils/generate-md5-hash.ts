import crypto from 'crypto';

export const generateMd5Hash = (content: any) => {
  return crypto.createHash('md5').update(content).digest('hex');
};
