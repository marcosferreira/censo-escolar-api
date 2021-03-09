import mongoose from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(MONGODB_URL, options)
  .then(() => console.log(`Success connected database!!!`))
  .catch(() => console.log(`Error connected data base`));
