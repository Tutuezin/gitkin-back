import { notFoundError } from "../middlewares/errorMiddleware";
import { User, Repository } from "@prisma/client";

export function verifyUserNameExists(userExists: User | null) {
  if (!userExists) throw notFoundError("user");
}

export function verifyUserIdExists(userExists: User | null) {
  if (!userExists) throw notFoundError("user id");
}

export function verifyRepositoryIdExists(repositoryExists: Repository | null) {
  console.log(repositoryExists);

  if (!repositoryExists) throw notFoundError("repository id");
}
