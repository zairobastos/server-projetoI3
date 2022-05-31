import { prisma } from "../../prisma";

type Time = {
	nome: string;
	abreviacao: string;
	escudo: string;
};

type Jogador = {
	nome: string;
	posicao: string;
	numero: string;
	imagem: string;
	timeId: string;
};

interface updateJogador extends Jogador {
	id: string;
}

export const Times = {
	setTime: async ({ nome, abreviacao, escudo }: Time) => {
		let cad = await prisma.time
			.create({
				data: {
					nome,
					abreviacao,
					escudo,
				},
			})
			.then((time) => {
				return true;
			})
			.catch((err) => {
				return false;
			});
		return cad;
	},
	setJogador: async ({ nome, posicao, numero, imagem, timeId }: Jogador) => {
		let cad = await prisma.jogador
			.create({
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
};
