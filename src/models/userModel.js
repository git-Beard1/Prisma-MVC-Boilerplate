const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.getAllUsers = async () => {
  const users = await prisma.users.findMany();
  return users;
};
