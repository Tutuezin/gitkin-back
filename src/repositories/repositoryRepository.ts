import { prisma } from "../config/database";

export async function getRepositories(user: string, userId: number) {
  const result = await prisma.repository.findMany({
    where: { userId },
  });
  return result;
}
