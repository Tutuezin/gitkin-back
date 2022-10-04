import { Router } from "express";
import { validateSchema } from "../middlewares/validations/schemaValidator";
import * as repositoryController from "../controllers/repositoryController";
import { repositoryInfosSchema } from "../schemas/repositorySchema";
import { validateToken } from "../middlewares/validations/tokenValidator";

const repositoryRouter = Router();

//TODO verificar quando o usarname n eh passado ou n existe
repositoryRouter.get(
  "/:username/repository/:userId",
  repositoryController.getRepositories
);

//TODO verificar quando o usarname n eh passado ou n existe
repositoryRouter.post(
  "/:username/repository/:userId",
  validateToken,
  validateSchema(repositoryInfosSchema),
  repositoryController.insertRepository
);

//TODO verificar quando o usarname n eh passado ou n existe
//TODO deixar essa rota autenticada
repositoryRouter.delete(
  "/:username/repository/:userId",
  //validateToken,
  repositoryController.deleteRepository
);

export default repositoryRouter;
