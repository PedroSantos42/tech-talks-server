import Mongoose from 'mongoose';

let database: Mongoose.Connection;

const user = 'admin';
const password = 'techtalks123';

class MongoDB {
  public openConnection = (): void => {
    const uri = `mongodb://${user}:${password}@localhost:27017/`;

    if (database) {
      return;
    }

    Mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    database = Mongoose.connection;

    database.once('open', async () => {
      console.log('Connected to MongoDB!');
    });

    database.on('error', () => {
      console.log('Error connecting to database...');
      throw new Error();
    });
  };

  public closeConnection = (): void => {
    if (database) {
      Mongoose.disconnect();
    }
  };
}

export default new MongoDB();
