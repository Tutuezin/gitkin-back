import { Router } from "express";
import { validateSchema } from "../middlewares/validations/schemaValidator";
import * as repositoryController from "../controllers/repositoryController";
import { repositoryInfosSchema } from "../schemas/repositorySchema";
import { validateToken } from "../middlewares/validations/tokenValidator";

const repositoryRouter = Router();

//TODO verificar se o username eh o dono do userId
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

//TODO fazer schema do req.body
repositoryRouter.put(
  "/:username/repository/:userId/:repoId",
  validateToken,
  repositoryController.editRepository
);

repositoryRouter.delete(
  "/:username/repository/:userId/:repoId",
  validateToken,
  repositoryController.deleteRepository
);

export default repositoryRouter;
