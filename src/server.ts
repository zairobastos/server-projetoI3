import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import mainRoutes from "./routes/index";
import campeonatoRoutes from "./routes/campeonatos";
import timesRoutes from "./routes/times";
import usuarioRoutes from "./routes/user";
import partidaRoutes from "./routes/partida";
import jogadorRoutes from "./routes/jogador";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", mainRoutes);
app.use("/campeonato", campeonatoRoutes);
app.use("/times", timesRoutes);
app.use("/usuario", usuarioRoutes);
app.use("/partida", partidaRoutes);
app.use("/jogador", jogadorRoutes);

app.use((req: Request, res: Response) => {
	res.status(404).send("Página não encontrada");
});

app.listen(process.env.PORT || 3000, () => {
	console.log("Servidor HTTP funcionando!");
});
