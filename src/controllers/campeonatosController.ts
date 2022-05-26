import { Request, Response } from "express";
import { Campeonatos } from "../model/campeonato/campeonatoModel";

export const paginaCampeonato = (req: Request, res: Response) => {
	res.send("Campeonatos");
};

export const criarCampeonato = async (req: Request, res: Response) => {
	const { nome, descricao, premiacao, logo, situacao, qtdTimes, userId } =
		req.body;
	let campeonato = Campeonatos.setCampeonato({
		nome,
		descricao,
		premiacao,
		logo,
		situacao,
		qtdTimes,
		userId,
	});
	(await campeonato)
		? res.status(201).send({ message: "Campeonato criado com sucesso!" })
		: res.status(400).send({ message: "Erro ao criar campeonato!" });
};
