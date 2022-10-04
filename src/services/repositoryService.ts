import * as repositoryRepository from "../repositories/repositoryRepository";

export async function getRepositories(user: string, userId: number) {
  return await repositoryRepository.getRepositories(user, userId);
}
