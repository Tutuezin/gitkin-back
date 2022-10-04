import { Request, Response } from "express";
import * as profileService from "../services/profileService";

export async function getProfileInfos(req: Request, res: Response) {
  const { username } = req.params;

  const infos = await profileService.getProfileInfos(username);

  res.status(200).send(infos);
}
