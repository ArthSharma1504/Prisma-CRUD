// src/models/userModel.js
const prisma = require('../config/db');

const userModel = {
  createUser: async (data) => {
    return await prisma.user.create({ data });
  },
  getAllUsers: async () => {
    return await prisma.user.findMany();
  },
  getUserById: async (id) => {
    return await prisma.user.findUnique({ where: { id } });
  },
  updateUser: async (id, data) => {
    return await prisma.user.update({ where: { id }, data });
  },
  deleteUser: async (id) => {
    return await prisma.user.delete({ where: { id } });
  },
};

module.exports = userModel;
