const userService = require("../services/userService");

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

// Add user
const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await userService.addUser(name, email);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to add user" });
  }
};


module.exports = { getUsers, createUser };
