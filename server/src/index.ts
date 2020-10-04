import mongoose from 'mongoose';
import { app } from './app';

const main = async () => {
  try {
    await mongoose.connect(
      'mongodb://test:password1@ds119489.mlab.com:19489/react-stripe-sendgrid-test',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    console.log('Connected to mongo db');
  } catch (err) {
    console.error(err);
  }

  app.listen(4000, () => {
    console.log('Listening on port 4000');
  });
};

main();
