import { Request, Response } from "express";
import { Campeonatos, Partidas } from "../model/campeonato/campeonatoModel";

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

export const criarPartida = async (req: Request, res: Response) => {
	const {
		data,
		horario,
		local,
		campeonatoId,
		time1Id,
		time2Id,
		placar1,
		placar2,
	} = req.body;
	let partida = Partidas.setPartida({
		data,
		horario,
		local,
		campeonatoId,
		time1Id,
		time2Id,
		placar1,
		placar2,
	});
	(await partida)
		? res.status(201).send({ message: "Partida criada com sucesso!" })
		: res.status(400).send({ message: "Erro ao criar partida!" });
};
