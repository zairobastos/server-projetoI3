import { Request, Response } from "express";
import { Partidas } from "../model/partida/partidaModel";
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
