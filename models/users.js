const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  email: String,
  emailVerified: Boolean,
  name: String,
  
});