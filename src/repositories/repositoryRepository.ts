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

export async function deleteRepository(repositoryId: number) {
  const result = await prisma.repository.delete({
    where: { id: repositoryId },
  });
  return result;
}

export async function findUserName(userName: string) {
  const result = await prisma.user.findUnique({ where: { userName } });

  return result;
}

export async function findUserId(userId: number) {
  const result = await prisma.user.findUnique({ where: { id: userId } });

  return result;
}

export async function findRepositoryId(repositoryId: number) {
  const result = await prisma.repository.findUnique({
    where: { id: repositoryId },
  });

  return result;
}
