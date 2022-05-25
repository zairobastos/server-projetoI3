import { Request, Response } from "express";
import { Times } from "../model/time/timeModel";

export const paginaTimes = (req: Request, res: Response) => {
	res.send("Times");
};

export const cadastrarTime = async (req: Request, res: Response) => {
	const { nome, abreviacao, escudo } = req.body;
	let time = Times.setTime({ nome, abreviacao, escudo });
	(await time)
		? res.status(201).send({ message: "Time cadastrado com sucesso!" })
		: res.status(400).send({ message: "Erro ao cadastrar time!" });
};
