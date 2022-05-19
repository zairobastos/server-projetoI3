import { Router } from "express";
import * as Times from "../controllers/timesController";

const router = Router();

router.get("/", Times.paginaTimes);

export default router;
