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
    repositoryData,
    username
  );

  res.status(201).send(repository);
}

export async function deleteRepository(req: Request, res: Response) {
  const { username, userId, repoId } = req.params;

  const repository = await repositoryService.deleteRepository(
    Number(userId),
    username,
    Number(repoId)
  );

  res.status(200).send(repository);
}
