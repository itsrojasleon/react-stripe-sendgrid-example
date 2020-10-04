import mongoose from 'mongoose';
import { app } from './app';
import { config } from './config/dev';

const main = async () => {
  try {
    await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to mongo db');
  } catch (err) {
    console.error(err);
  }

  app.listen(4000, () => {
    console.log('Listening on port 4000');
  });
};

main();
