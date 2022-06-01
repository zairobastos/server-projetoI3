import { Router } from "express";
import * as Partida from "../controllers/partidaController";

const router = Router();

router.post("/criarPartida", Partida.criarPartida);
router.post("/updatePartida", Partida.updatePartida);
router.delete("/deletePartida/:id", Partida.deletePartida);

export default router;
