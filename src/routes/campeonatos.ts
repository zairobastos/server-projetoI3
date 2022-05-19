import { Router } from "express";
import * as Campeonato from "../controllers/campeonatosController";

const router = Router();

router.get("/", Campeonato.paginaCampeonato);

export default router;
