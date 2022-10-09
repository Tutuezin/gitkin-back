import { prisma } from "../config/database";
import * as profileTypes from "../types/profileTypes";
import * as profileUtils from "../utils/profileUtils";

export async function getProfileInfos(user: string) {
  const result = await prisma.user.findUnique({
    select: {
      id: true,
      name: true,
      userName: true,
      picture: true,
      occupation: true,
      createdAt: true,
      aboutMe: true,
      socials: true,
      repositories: true,
    },
    where: { userName: user },
  });

  profileUtils.verifyUserNameExists(result);

  return result;
}

export async function updateInfos(
  user: string,
  infos: profileTypes.IProfileData
) {
  const userNameExists = await prisma.user.findUnique({
    select: {
      id: true,
      name: true,
      userName: true,
      picture: true,
      occupation: true,
      createdAt: true,
      aboutMe: true,
      socials: true,
    },
    where: { userName: user },
  });

  profileUtils.verifyUserNameExists(userNameExists);

  const result = await prisma.user.update({
    where: { userName: user },
    select: {
      userName: true,
      picture: true,
      aboutMe: true,
      occupation: true,
    },
    data: infos,
  });

  return result;
}

export async function updateSocials({ userId, userName, socials }: any) {
  const userExists = await prisma.user.findUnique({
    select: {
      name: true,
      socials: true,
    },
    where: { id: userId },
  });

  const userNameExists = await prisma.user.findUnique({
    select: {
      id: true,
      name: true,
      userName: true,
      picture: true,
      occupation: true,
      createdAt: true,
      aboutMe: true,
      socials: true,
    },
    where: { userName: userName },
  });

  profileUtils.verifyUserExists(userExists);
  profileUtils.verifyUserNameExists(userNameExists);
  profileUtils.verifyUser(userExists?.name, userNameExists?.name);

  const teste = {
    userId: userId,
    ...socials,
  };

  const result = userExists?.socials[0]
    ? await prisma.social.update({
        where: { id: userExists?.socials[0].id },
        data: socials,
      })
    : await prisma.social.create({
        data: teste,
      });

  return result;
}
