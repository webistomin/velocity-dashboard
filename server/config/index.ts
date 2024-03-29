import dotenv from 'dotenv';

/**
 * Load environment variables
 */
dotenv.config();

const vars = process.env;

export default {
  /**
   * Base URL
   */
  base: vars.BASE_URL,
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
    avatarsFolder: vars.AWS_AVATAR_FOLDER,
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
  /**
   * GMAIL secrets
   */
  gmail: {
    serviceName: vars.GMAIL_SERVICE_NAME,
    serviceHost: vars.GMAIL_SERVICE_HOST,
    serviceSecure: vars.GMAIL_SERVICE_SECURE,
    servicePort: vars.GMAIL_SERVICE_PORT,
    userName: vars.GMAIL_USER_NAME,
    userPassword: vars.GMAIL_USER_PASSWORD,
  },
  /**
   * Weatherbit secrets
   */
  weatherbit: {
    key: vars.WEATHERBIT_API_KEY,
  },
};
