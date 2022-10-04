import { Router } from "express";
import authRouter from "./authRouter";
import profileRouter from "./profileRouter";
import repositoryRouter from "./repositoryRouter";

const router = Router();

router.use(authRouter);
router.use(profileRouter);
router.use(repositoryRouter);

export default router;
