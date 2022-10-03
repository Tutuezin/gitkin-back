import * as authTypes from "../types/authTypes";
import * as authUtils from "../utils/authUtils";
import * as cryptoUtils from "../utils/cryptoUtils";
import * as authRepository from "../repositories/authRepository";

export async function signUp(userData: authTypes.IUserData) {
  const emailExists = await authRepository.findEmail(userData.email);

  authUtils.verifyEmailExists(emailExists);

  const hashedPassword = await cryptoUtils.encryptPassword(userData.password);

  return await authRepository.insertUser({
    email: userData.email,
    userName: userData.userName,
    password: hashedPassword,
  });
}