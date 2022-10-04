import { Request, Response } from "express";
import * as repositoryService from "../services/repositoryService";

export async function getRepositories(req: Request, res: Response) {
  const { username, userId } = req.params;

  const repositories = await repositoryService.getRepositories(Number(userId));

  res.status(200).send(repositories);
}

export async function insertRepository(req: Request, res: Response) {
  const { username, userId } = req.params;
  const repositoryData = req.body;

  const repository = await repositoryService.insertRepository(
    Number(userId),
    repositoryData
  );

  res.status(201).send(repository);
}
