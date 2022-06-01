import { Router } from "express";
import * as Jogador from "../controllers/jogadorController";

const router = Router();

router.post("/cadastrar", Jogador.cadastrarJogador);
router.post("/atualizar", Jogador.atualizarJogador);
router.delete("/deletar/:id", Jogador.deletarJogador);
router.post("/listar", Jogador.listarJogadores);

export default router;
