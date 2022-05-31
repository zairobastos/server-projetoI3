import { Request, Response } from "express";
import { Times } from "../model/time/timeModel";

export const paginaTimes = (req: Request, res: Response) => {
	res.send("Times");
};

export const cadastrarTime = async (req: Request, res: Response) => {
	const { nome, abreviacao, escudo } = req.body;
	let time = await Times.setTime({ nome, abreviacao, escudo });
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
	const { id, nome, abreviacao, escudo } = req.body;
	let atualizado = await Times.updateTime({ id, nome, abreviacao, escudo });

	atualizado
		? res
				.status(200)
				.send({ message: "Time atualizado com sucesso!" })
				.send(atualizado)
		: res.status(400).send({ message: "Erro ao atualizar time!" });
};

export const cadastrarJogador = async (req: Request, res: Response) => {
	const { nome, posicao, numero, imagem, timeId } = req.body;
	let jogador = await Times.setJogador({
		nome,
		posicao,
		numero,
		imagem,
		timeId,
	});
	jogador
		? res.status(201).send({ message: "Jogador cadastrado com sucesso!" })
		: res.status(400).send({ message: "Erro ao cadastrar jogador!" });
};

export const atualizarJogador = async (req: Request, res: Response) => {
	const { id, nome, posicao, numero, imagem, timeId } = req.body;
	let jogador = await Times.updateJogador({
		id,
		nome,
		posicao,
		numero,
		imagem,
		timeId,
	});
	jogador
		? res.status(201).send({ message: "Jogador atualizado com sucesso!" })
		: res.status(400).send({ message: "Erro ao atualizar jogador!" });
};

export const deletarJogador = async (req: Request, res: Response) => {
	const { id } = req.params;
	let jogador = await Times.deleteJogador(id);
	jogador
		? res.status(201).send({ message: "Jogador deletado com sucesso!" })
		: res.status(400).send({ message: "Erro ao deletar jogador!" });
};
