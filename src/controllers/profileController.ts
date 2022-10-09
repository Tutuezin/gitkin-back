import { Request, Response } from "express";
import * as profileService from "../services/profileService";

export async function getProfileInfos(req: Request, res: Response) {
  const { username } = req.params;

  const infos = await profileService.getProfileInfos(username);

  res.status(200).send(infos);
}

export async function updateInfos(req: Request, res: Response) {
  const { username } = req.params;
  const infos = req.body;

  const result = await profileService.updateInfos(username, infos);

  res.status(200).send(result);
}

export async function updateSocials(req: Request, res: Response) {
  const { userId, username } = req.params;
  const socials = req.body;

  const result = await profileService.updateSocials(
    Number(userId),
    username,
    socials
  );

  res.status(200).send(result);
}
