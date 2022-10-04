import * as profileRepository from "../repositories/profileRepository";

export async function getProfileInfos(user: string) {
  return await profileRepository.getProfileInfos(user);
}

export async function updateInfos(user: string, infos: object) {
  return await profileRepository.updateInfos(user, infos);
}
