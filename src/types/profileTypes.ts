import { User } from "@prisma/client";

export type IProfileData = Omit<
  User,
  "id" | "email" | "userName" | "password" | "createdAt"
>;
