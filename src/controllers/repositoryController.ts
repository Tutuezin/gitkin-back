import { Request, Response } from "express";
import * as repositoryService from "../services/repositoryService";

export async function getRepositories(req: Request, res: Response) {
  const { username, userId } = req.params;

  const repositories = await repositoryService.getRepositories(
    username,
    Number(userId)
  );

  res.status(200).send(repositories);
}
