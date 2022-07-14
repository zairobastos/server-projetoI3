import { prisma } from "../../prisma";

type Jogador = {
	nome: string;
	posicao: string;
	numero: string;
	imagem: string;
	timeId: string;
	userId: string;
};

interface updateJogador extends Jogador {
	id: string;
}

export const Jogador = {
	setJogador: async ({
		nome,
		posicao,
		numero,
		imagem,
		timeId,
		userId,
	}: Jogador) => {
		let cad = await prisma.jogador
			.create({
				data: {
					nome,
					posicao,
					numero,
					imagem,
					timeId,
					userId,
				},
			})
			.then((jogador) => {
				return true;
			})
			.catch((err) => {
				return false;
			});
		return cad;
	},
	updateJogador: async ({
		id,
		nome,
		posicao,
		numero,
		imagem,
		timeId,
	}: updateJogador) => {
		let cad = await prisma.jogador
			.update({
				where: {
					id,
				},
				data: {
					nome,
					posicao,
					numero,
					imagem,
					timeId,
				},
			})
			.then((jogador) => {
				return true;
			})
			.catch((err) => {
				return false;
			});
		return cad;
	},
	deleteJogador: async (id: string) => {
		let cad = await prisma.jogador
			.delete({
				where: {
					id,
				},
			})
			.then((jogador) => {
				return true;
			})
			.catch((err) => {
				return false;
			});
		return cad;
	},
	getJogador: async (timeId: string) => {
		let jogador = await prisma.jogador
			.findMany({
				where: {
					timeId,
				},
			})
			.then((jogador) => {
				return jogador;
			})
			.catch((err) => {
				return false;
			});
		return jogador;
	},
	getJogadorUser: async (userId: string) => {
		let jogador = await prisma.jogador
			.findMany({
				where: {
					userId,
				},
			})
			.then((jogador) => {
				return jogador;
			})
			.catch((err) => {
				return false;
			});
		return jogador;
	},
	getJogadorId: async (id: string) => {
		let jogador = await prisma.jogador
			.findMany({
				where: {
					id,
				},
			})
			.then((jogador) => {
				return jogador;
			})
			.catch((err) => {
				return false;
			});
		return jogador;
	},
};
