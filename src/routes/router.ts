import { Router } from "express";
import authRouter from "./authRouter";
import profileRouter from "./profileRouter";

const router = Router();

router.use(authRouter);
router.use(profileRouter);

export default router;
