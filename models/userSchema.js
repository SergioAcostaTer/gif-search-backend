const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  picture: {
    type: String,
  },
  verified: {
    type: String,
  },
  date: {
    type: String,
    default: (new Date).toISOString()
  },
  token: {
    type: String,
  },
  gifs:{
    type: Array,
    default: []
  }
});

module.exports = mongoose.model("user", userSchema)
