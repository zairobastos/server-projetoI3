import { Request, Response } from "express";
import { Campeonatos, Partidas } from "../model/campeonato/campeonatoModel";

export const paginaCampeonato = (req: Request, res: Response) => {
	res.send("Campeonatos");
};

export const criarCampeonato = async (req: Request, res: Response) => {
	const { nome, descricao, premiacao, logo, situacao, qtdTimes, userId } =
		req.body;
	let campeonato = await Campeonatos.setCampeonato({
		nome,
		descricao,
		premiacao,
		logo,
		situacao,
		qtdTimes,
		userId,
	});
	campeonato
		? res.status(201).send({ message: "Campeonato criado com sucesso!" })
		: res.status(400).send({ message: "Erro ao criar campeonato!" });
};

export const listarCampeonatos = async (req: Request, res: Response) => {
	const { id } = req.body;
	let campeonatos = await Campeonatos.getCampeonatos(id);

	campeonatos
		? res.status(200).send(campeonatos)
		: res.status(400).send({ message: "Erro ao listar campeonatos!" });
};

export const deleteCampeonato = async (req: Request, res: Response) => {
	const { id } = req.params;
	let campeonato = await Campeonatos.deleteCampeonato(id);

	campeonato
		? res.status(200).send({ message: "Campeonato deletado com sucesso!" })
		: res.status(400).send({ message: "Erro ao deletar campeonato!" });
};

export const updateCampeonato = async (req: Request, res: Response) => {
	const { id, nome, descricao, logo, premiacao, qtdTimes, situacao, userId } =
		req.body;
	let atualizado = await Campeonatos.updateCampeonato({
		id,
		nome,
		descricao,
		logo,
		premiacao,
		qtdTimes,
		situacao,
		userId,
	});

	atualizado
		? res
				.status(200)
				.send({ message: "Campeonato atualizado com sucesso!" })
		: res.status(400).send({ message: "Erro ao atualizar campeonato!" });
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
	let partida = await Partidas.setPartida({
		data,
		horario,
		local,
		campeonatoId,
		time1Id,
		time2Id,
		placar1,
		placar2,
	});
	partida
		? res.status(201).send({ message: "Partida criada com sucesso!" })
		: res.status(400).send({ message: "Erro ao criar partida!" });
};

export const deletePartida = async (req: Request, res: Response) => {
	const { id } = req.params;
	let partida = await Partidas.deletePartida(id);

	partida
		? res.status(200).send({ message: "Partida deletada com sucesso!" })
		: res.status(400).send({ message: "Erro ao deletar partida!" });
};

export const updatePartida = async (req: Request, res: Response) => {
	const {
		id,
		data,
		horario,
		local,
		campeonatoId,
		time1Id,
		time2Id,
		placar1,
		placar2,
	} = req.body;
	let atualizado = await Partidas.updatePartida({
		id,
		data,
		horario,
		local,
		campeonatoId,
		time1Id,
		time2Id,
		placar1,
		placar2,
	});

	atualizado
		? res.status(200).send({ message: "Partida atualizada com sucesso!" })
		: res.status(400).send({ message: "Erro ao atualizar partida!" });
};
