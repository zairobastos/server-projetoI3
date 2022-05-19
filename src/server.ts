import "dotenv/config";
import express, { Request, Response } from "express";
import mainRoutes from "./routes/index";
import campeonatoRoutes from "./routes/campeonatos";
import timesRoutes from "./routes/times";

const app = express();

app.use("/", mainRoutes);
app.use("/campeonato", campeonatoRoutes);
app.use("/times", timesRoutes);

app.use((req: Request, res: Response) => {
	res.status(404).send("Página não encontrada");
});

app.listen(process.env.PORT || 3000, () => {
	console.log("Servidor HTTP funcionando!");
});
