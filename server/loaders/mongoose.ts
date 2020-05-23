import mongoose from 'mongoose';
import consola from 'consola';
import { Db, MongoError } from 'mongodb';
import config from 'server/config';

/**
 * Connect to MongoDB
 */
export default async (): Promise<Db | void> => {
  const url = config.mongoDB.connectString;

  if (url) {
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useNewUrlParser', true);

    const connection = await mongoose.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err: MongoError) => {
        if (err) {
          consola.error({
            message: `Error during connection to database: ${err}`,
            badge: true,
          });
        } else {
          consola.success({
            message: 'Successfully connected to database',
            badge: true,
          });
        }
      }
    );
    return connection.connection.db;
  }
};
