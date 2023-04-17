/* eslint-disable no-console */
const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI);

mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('>> DATABASE IS CONNECTED'))
  .catch((error) => console.log(error));
