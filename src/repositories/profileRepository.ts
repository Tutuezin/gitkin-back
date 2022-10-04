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
