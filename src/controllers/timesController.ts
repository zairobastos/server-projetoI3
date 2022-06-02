import { Request, Response } from "express";
import { Times } from "../model/time/timeModel";

export const paginaTimes = (req: Request, res: Response) => {
	res.send("Times");
};

export const cadastrarTime = async (req: Request, res: Response) => {
	const { nome, abreviacao, escudo, campeonatoId } = req.body;
	let time = await Times.setTime({ nome, abreviacao, escudo, campeonatoId });
	time
		? res.status(201).send({ message: "Time cadastrado com sucesso!" })
		: res.status(400).send({ message: "Erro ao cadastrar time!" });
};

export const deleteTime = async (req: Request, res: Response) => {
	const { id } = req.params;
	let time = await Times.deleteTime(id);

	time
		? res.status(200).send({ message: "Time deletado com sucesso!" })
		: res.status(400).send({ message: "Erro ao deletar time!" });
};

export const updateTime = async (req: Request, res: Response) => {
	const { id, nome, abreviacao, escudo, campeonatoId } = req.body;
	let atualizado = await Times.updateTime({
		id,
		nome,
		abreviacao,
		escudo,
		campeonatoId,
	});

	atualizado
		? res.status(200).send({ message: "Time atualizado com sucesso!" })
		: res.status(400).send({ message: "Erro ao atualizar time!" });
};
