import { Router } from "express";
import { validateSchema } from "../middlewares/validations/schemaValidator";
import * as profileController from "../controllers/profileController";
import { validateToken } from "../middlewares/validations/tokenValidator";

const profileRouter = Router();

profileRouter.get("/:username", profileController.getProfileInfos);

export default profileRouter;
