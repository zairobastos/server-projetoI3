import { Router } from "express";
import * as Times from "../controllers/timesController";

const router = Router();

router.get("/", Times.paginaTimes);
router.post("/cadastrar", Times.cadastrarTime);
router.post("/update", Times.updateTime);
router.delete("/delete/:id", Times.deleteTime);

export default router;
