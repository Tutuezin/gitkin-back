import { prisma } from "../config/database";
import * as authTypes from "../types/authTypes";

export async function findEmail(email: string) {
  const result = await prisma.user.findUnique({ where: { email } });

  return result;
}

export async function findUserName(userName: string) {
  const result = await prisma.user.findUnique({ where: { userName } });

  return result;
}

export async function insertUser(user: authTypes.IUserData) {
  return await prisma.user.create({ data: user });
}
