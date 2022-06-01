import { Request, Response } from "express";
import { Jogador } from "../model/jogador/jogadorModel";
export const cadastrarJogador = async (req: Request, res: Response) => {
	const { nome, posicao, numero, imagem, timeId } = req.body;
	let jogador = await Jogador.setJogador({
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
	let jogador = await Jogador.updateJogador({
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
	let jogador = await Jogador.deleteJogador(id);
	jogador
		? res.status(201).send({ message: "Jogador deletado com sucesso!" })
		: res.status(400).send({ message: "Erro ao deletar jogador!" });
};

export const listarJogadores = async (req: Request, res: Response) => {
	const { timeId } = req.body;
	let jogadores = await Jogador.getJogador(timeId);
	jogadores
		? res.status(201).send({ jogadores })
		: res.status(400).send({ message: "Erro ao listar jogadores!" });
};
