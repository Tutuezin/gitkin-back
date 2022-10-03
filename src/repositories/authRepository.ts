import { prisma } from "../config/database";

export async function findEmail(email: string) {
  const result = await prisma.user.findUnique({ where: { email } });

  return result;
}
