require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.SERVER_MONGODB_URI;

const connectDB = async () => {
  try {
    console.log('MongoDB URI:', uri);
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Success! Connected to MongoDB');
  } catch (error) {
    console.error('Error occurred while connecting to MongoDB:', error.message);
  }
};

module.exports = connectDB;