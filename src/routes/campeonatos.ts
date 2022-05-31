import { Router } from "express";
import * as Campeonato from "../controllers/campeonatosController";

const router = Router();

router.get("/", Campeonato.paginaCampeonato);
router.post("/criarCampeonato", Campeonato.criarCampeonato);
router.post("/listarCampeonatos", Campeonato.listarCampeonatos);
router.post("/updateCampeonato", Campeonato.updateCampeonato);
router.delete("/deleteCampeonato/:id", Campeonato.deleteCampeonato);

router.post("/criarPartida", Campeonato.criarPartida);
router.post("/updatePartida", Campeonato.updatePartida);
router.delete("/deletePartida/:id", Campeonato.deletePartida);

export default router;
