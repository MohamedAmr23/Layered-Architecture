const User = require("../models/userModel");

// Get all users
const getAllUsers = async () => {
  return await User.find();
};

// Add new user
const addUser = async (name, email) => {
  const user = new User({ name, email });
  return await user.save();
};

module.exports = { getAllUsers, addUser };
