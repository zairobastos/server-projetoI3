import { Router } from "express";
import * as Campeonato from "../controllers/campeonatosController";

const router = Router();

router.get("/", Campeonato.paginaCampeonato);

router.post("/criarCampeonato", Campeonato.criarCampeonato);

router.post("/criarPartida", Campeonato.criarPartida);

router.post("/listarCampeonatos", Campeonato.listarCampeonatos);

export default router;
