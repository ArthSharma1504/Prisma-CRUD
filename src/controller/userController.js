// src/controllers/userController.js
const userModel = require('../model/userModel');
const asyncHandler = require('express-async-handler');

const userController = {
  createUser: asyncHandler(async (req, res) => {
    const { name, email } = req.body;
    const user = await userModel.createUser({ name, email });
    res.status(201).json(user);
  }),

  getAllUsers: asyncHandler(async (req, res) => {
    const users = await userModel.getAllUsers();
    res.json(users);
  }),

  getUserById: asyncHandler(async (req, res) => {
    const user = await userModel.getUserById(Number(req.params.id));
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  }),

  updateUser: asyncHandler(async (req, res) => {
    const user = await userModel.updateUser(Number(req.params.id), req.body);
    res.json(user);
  }),

  deleteUser: asyncHandler(async (req, res) => {
    await userModel.deleteUser(Number(req.params.id));
    res.status(204).send();
  }),
};

module.exports = userController;
