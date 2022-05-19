import { Router } from "express";
import * as Inicial from "../controllers/indexController";

const router = Router();

router.get("/", Inicial.paginaInicial);

export default router;
