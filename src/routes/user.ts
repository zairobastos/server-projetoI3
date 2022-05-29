import { Router } from "express";
import * as User from "../controllers/userController";

const rota = Router();

rota.post("/cadastrar", User.user);

rota.post("/login", User.login);

export default rota;
