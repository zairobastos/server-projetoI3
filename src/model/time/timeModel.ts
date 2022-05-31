import { prisma } from "../../prisma";

type Time = {
	nome: string;
	abreviacao: string;
	escudo: string;
};

interface updateTime extends Time {
	id: string;
}

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
	deleteTime: async (id: string) => {
		let del = await prisma.time
			.delete({
				where: {
					id,
				},
			})
			.then((time) => {
				return true;
			})
			.catch((err) => {
				return false;
			});
		return del;
	},
	updateTime: async ({ id, nome, abreviacao, escudo }: updateTime) => {
		let upd = await prisma.time
			.update({
				where: {
					id,
				},
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
		return upd;
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
