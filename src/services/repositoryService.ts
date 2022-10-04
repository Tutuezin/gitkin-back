import * as repositoryRepository from "../repositories/repositoryRepository";
import * as repositoryTypes from "../types/repositoryTypes";

export async function getRepositories(userId: number) {
  return await repositoryRepository.getRepositories(userId);
}

export async function insertRepository(
  userId: number,
  repositoryData: repositoryTypes.IRepositoryData
) {
  return await repositoryRepository.insertRepository(userId, repositoryData);
}
