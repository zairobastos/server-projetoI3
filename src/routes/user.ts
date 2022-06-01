import { Router } from "express";
import * as User from "../controllers/userController";
import Auth from "../middlewares/auth";

const rota = Router();

rota.post("/cadastrar", User.user);

rota.post("/login", Auth.private as any, User.login);

rota.delete("/deletar/:id", User.deletarUsuario);

rota.post("/atualizar", User.updateUsuario);

export default rota;
