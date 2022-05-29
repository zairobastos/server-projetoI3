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
};
