import { Router } from "express";
import { validateSchema } from "../middlewares/validations/schemaValidator";
import * as repositoryController from "../controllers/repositoryController";
import { repositoryInfosSchema } from "../schemas/repositorySchema";
import { validateToken } from "../middlewares/validations/tokenValidator";

const repositoryRouter = Router();

repositoryRouter.get(
  "/:username/repository/:userId",
  repositoryController.getRepositories
);

repositoryRouter.post(
  "/:username/repository/:userId",
  validateToken,
  validateSchema(repositoryInfosSchema),
  repositoryController.insertRepository
);

export default repositoryRouter;
