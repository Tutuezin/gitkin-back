import * as repositoryRepository from "../repositories/repositoryRepository";
import * as repositoryTypes from "../types/repositoryTypes";
import * as repositoryUtils from "../utils/repositoryUtils";

export async function getRepositories(userId: number) {
  return await repositoryRepository.getRepositories(userId);
}

export async function insertRepository(
  userId: number,
  repositoryData: repositoryTypes.IRepositoryData,
  username: string
) {
  const userNameExists = await repositoryRepository.findUserName(username);
  const userIdExists = await repositoryRepository.findUserId(userId);

  repositoryUtils.verifyUserNameExists(userNameExists);
  repositoryUtils.verifyUserIdExists(userIdExists);

  return await repositoryRepository.insertRepository(userId, repositoryData);
}

export async function editRepository(
  userId: number,
  username: string,
  repositoryId: number,
  repositoryInfo: repositoryTypes.IRepositoryData
) {
  const userNameExists = await repositoryRepository.findUserName(username);
  const userIdExists = await repositoryRepository.findUserId(userId);
  const repositoryIdExists = await repositoryRepository.findRepositoryId(
    repositoryId
  );

  repositoryUtils.verifyUserNameExists(userNameExists);
  repositoryUtils.verifyUserIdExists(userIdExists);
  repositoryUtils.verifyRepositoryIdExists(repositoryIdExists);

  return await repositoryRepository.editRepository(
    repositoryId,
    repositoryInfo
  );
}

export async function deleteRepository(
  userId: number,
  username: string,
  repositoryId: number
) {
  const userNameExists = await repositoryRepository.findUserName(username);
  const userIdExists = await repositoryRepository.findUserId(userId);
  const repositoryIdExists = await repositoryRepository.findRepositoryId(
    repositoryId
  );

  repositoryUtils.verifyUserNameExists(userNameExists);
  repositoryUtils.verifyUserIdExists(userIdExists);
  repositoryUtils.verifyRepositoryIdExists(repositoryIdExists);

  return await repositoryRepository.deleteRepository(repositoryId);
}
