import { prisma } from "../config/database";
import * as repositoryTypes from "../types/repositoryTypes";

export async function getRepositories(userId: number) {
  const result = await prisma.repository.findMany({
    where: { userId },
  });
  return result;
}

export async function insertRepository(
  userId: number,
  repositoryData: repositoryTypes.IRepositoryData
) {
  const result = await prisma.repository.create({
    data: { userId, ...repositoryData },
  });
  return result;
}
