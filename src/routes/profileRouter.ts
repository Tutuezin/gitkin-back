import { Router } from "express";
import { validateSchema } from "../middlewares/validations/schemaValidator";
import * as profileController from "../controllers/profileController";
import { validateToken } from "../middlewares/validations/tokenValidator";
import {
  updateInfosSchema,
  updateSocialsSchema,
} from "../schemas/profileSchema";

const profileRouter = Router();

profileRouter.get("/:username", profileController.getProfileInfos);

profileRouter.put(
  "/:username",
  validateToken,
  validateSchema(updateInfosSchema),
  profileController.updateInfos
);

profileRouter.put(
  "/:username/:userId",
  validateToken,
  validateSchema(updateSocialsSchema),
  profileController.updateSocials
);

export default profileRouter;
