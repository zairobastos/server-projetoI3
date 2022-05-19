import "dotenv/config";
import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
	res.send("Hello World!");
});

app.listen(process.env.PORT || 3000, () => {
	console.log("Servidor HTTP funcionando!");
});
