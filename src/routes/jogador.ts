import { Router } from "express";
import * as Jogador from "../controllers/jogadorController";

const router = Router();

router.post("/cadastrar", Jogador.cadastrarJogador);
router.post("/atualizar", Jogador.atualizarJogador);
router.delete("/deletar/:id", Jogador.deletarJogador);

export default router;
