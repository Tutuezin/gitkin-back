import { prisma } from "../config/database";

export async function getProfileInfos(user: string) {
  const result = await prisma.user.findUnique({
    select: {
      userName: true,
      picture: true,
      occupation: true,
      createdAt: true,
      aboutMe: true,
      socials: true,
    },
    where: { userName: user },
  });
  return result;
}

export async function updateInfos(user: string, infos: object) {
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
