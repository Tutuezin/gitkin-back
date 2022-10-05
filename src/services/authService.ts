import * as authTypes from "../types/authTypes";
import * as authUtils from "../utils/authUtils";
import * as cryptoUtils from "../utils/cryptoUtils";
import * as authRepository from "../repositories/authRepository";

export async function signUp(userData: authTypes.IUserData) {
  const emailExists = await authRepository.findEmail(userData.email);
  const userNameExists = await authRepository.findUserName(userData.userName);

  authUtils.verifyEmailExists(emailExists);
  authUtils.verifyUserNameExists(userNameExists);

  const hashedPassword = await cryptoUtils.encryptPassword(userData.password);

  return await authRepository.insertUser({
    email: userData.email,
    userName: userData.userName,
    password: hashedPassword,
  });
}

export async function signIn(userData: authTypes.IUserData) {
  const emailExists = await authRepository.findEmail(userData.email);

  authUtils.verifyEmailNotExists(emailExists);

  cryptoUtils.checkPassword(userData.password, emailExists!.password);
  const token = authUtils.generateToken(emailExists!);

  const body = {
    userName: emailExists?.userName,
  };

  return { token, body };
}
