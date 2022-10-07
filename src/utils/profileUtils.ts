import {
  notFoundError,
  unauthorizedError,
} from "../middlewares/errorMiddleware";

export function verifyUserExists(userExists: object | null) {
  if (!userExists) throw notFoundError("user");
}

export function verifyUserNameExists(userExists: object | null) {
  if (!userExists) throw notFoundError("user");
}

export function verifyUser(name1: any, name2: any) {
  if (name1 !== name2) throw unauthorizedError("Username or userId");
}
