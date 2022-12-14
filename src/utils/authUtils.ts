import {
  conflictError,
  unauthorizedError,
} from "../middlewares/errorMiddleware";
import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

export function verifyEmailExists(emailExists: User | null) {
  if (emailExists) throw conflictError("Email");
}

export function verifyUserNameExists(userExists: User | null) {
  if (userExists) throw conflictError("User");
}

export function verifyEmailNotExists(emailExists: User | null) {
  if (!emailExists) throw unauthorizedError("Email or password");
}

export function generateToken(user: User) {
  const token = jwt.sign(
    { id: user.id, userName: user.userName },
    String(process.env.JWT_SECRET),
    {
      expiresIn: "24h",
    }
  );

  return token;
}
