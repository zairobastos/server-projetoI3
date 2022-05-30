import { Router } from "express";
import * as User from "../controllers/userController";

const rota = Router();

rota.post("/cadastrar", User.user);

rota.post("/login", User.login);

rota.delete("/deletar/:id", User.deletarUsuario);

rota.post("/atualizar", User.updateUsuario);

export default rota;
