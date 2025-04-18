const mongoose = require("mongoose");

// (Persistence Layer)
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
