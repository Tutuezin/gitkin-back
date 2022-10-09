import { Request, Response } from "express";
import * as authService from "../services/authService";

export async function signUp(req: Request, res: Response) {
  const {
    email,
    name,
    userName,
    password,
  }: { email: string; name: string; userName: string; password: string } =
    req.body;

  const createdUser = await authService.signUp({
    email,
    name,
    userName,
    password,
  });

  res.status(201).send(createdUser);
}

export async function signIn(req: Request, res: Response) {
  const user = req.body;

  const token = await authService.signIn(user);

  res.status(200).send(token);
}
