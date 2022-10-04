import { Router } from "express";
import { validateSchema } from "../middlewares/validations/schemaValidator";
import * as profileController from "../controllers/profileController";
import { validateToken } from "../middlewares/validations/tokenValidator";
import { updateInfosSchema } from "../schemas/profileSchema";

const profileRouter = Router();

profileRouter.get("/:username", profileController.getProfileInfos);
profileRouter.put(
  "/:username",
  validateToken,
  validateSchema(updateInfosSchema),
  profileController.updateInfos
);

export default profileRouter;
