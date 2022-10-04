import * as profileRepository from "../repositories/profileRepository";

export async function getProfileInfos(user: string) {
  return await profileRepository.getProfileInfos(user);
}
