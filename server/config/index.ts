import dotenv from 'dotenv';

/**
 * Load environment variables
 */
dotenv.config();

const vars = process.env;

export default {
  /**
   * Environment
   */
  env: vars.NODE_ENV,
  /**
   * MongoDB Secrets
   */
  mongoDB: {
    connectString: vars.DATABASE_URI_STRING,
  },
  /**
   * AWS Secrets
   */
  aws: {
    accessKey: vars.AWS_ACCESS_KEY_ID,
    secretKey: vars.AWS_SECRET_KEY,
    bucketName: vars.AWS_BUCKET_NAME,
  },
  /**
   * API version prefix
   */
  api: {
    prefix: '/api/v1',
  },
  /**
   * JWT secret
   */
  jwt: {
    secret: vars.JWT_SECRET,
  },
};
