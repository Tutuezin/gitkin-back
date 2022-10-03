import { Request, Response } from "express";
import * as authService from "../services/authService";

export async function signUp(req: Request, res: Response) {
  const { email, userName, password } = req.body;

  const createdUser = await authService.signUp({ email, userName, password });

  res.status(201).send(createdUser);
}

export async function signIn(req: Request, res: Response) {
  const user = req.body;

  const token = await authService.signIn(user);

  res.status(200).send(token);
}
