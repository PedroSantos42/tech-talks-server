import mongoose from 'mongoose';

let database: mongoose.Connection;

const user = process.env.MONGO_INITDB_ROOT_USERNAME;
const password = process.env.MONGO_INITDB_ROOT_PASSWORD;

class MongoDB {
  public openConnection = (): void => {
    const uri = `mongodb://${user}:${password}@localhost:27017/`;

    if (database) {
      return;
    }

    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    database = mongoose.connection;

    database.once('open', async () => {
      console.log('Connected to MongoDB!');
    });

    database.on('error', err => {
      console.log('Error when connecting to the database: ', err);
      throw new Error();
    });
  };

  public closeConnection = (): void => {
    if (database) {
      mongoose.disconnect();
    }
  };
}

export default new MongoDB();
