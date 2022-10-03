import { Request, Response } from "express";
import * as authService from "../services/authService";

export async function signUp(req: Request, res: Response) {
  const { email, userName, password } = req.body;

  const createdUser = await authService.signUp({ email, userName, password });

  res.status(201).send(createdUser);
}
