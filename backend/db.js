const mongoose = require('mongoose');
require('dotenv').config()

function connectDb(){
  mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Successfully connected to db'));
}

module.exports = connectDb