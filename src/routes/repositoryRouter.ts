import { Router } from "express";
import { validateSchema } from "../middlewares/validations/schemaValidator";
import * as repositoryController from "../controllers/repositoryController";

const repositoryRouter = Router();

repositoryRouter.get(
  "/:username/repository/:userId",
  repositoryController.getRepositories
);

export default repositoryRouter;
