import * as profileRepository from "../repositories/profileRepository";
import * as profileTypes from "../types/profileTypes";

export async function getProfileInfos(user: string) {
  return await profileRepository.getProfileInfos(user);
}

export async function updateInfos(
  user: string,
  infos: profileTypes.IProfileData
) {
  return await profileRepository.updateInfos(user, infos);
}
