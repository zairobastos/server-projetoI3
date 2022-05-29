import { prisma } from "../../prisma";

type Campeonato = {
	nome: string;
	descricao: string;
	premiacao: string;
	logo: string;
	situacao: Opcao;
	qtdTimes: number;
	userId: string;
};
enum Opcao {
	iniciado = "INICIADO",
	finalizado = "FINALIZADO",
	cancelado = "CANCELADO",
	aberto = "ABERTO",
}

export const Campeonatos = {
	setCampeonato: async ({
		nome,
		descricao,
		premiacao,
		logo,
		situacao,
		qtdTimes,
		userId,
	}: Campeonato) => {
		let cad = await prisma.campeonato
			.create({
				data: {
					nome,
					descricao,
					premiacao,
					logo,
					situacao,
					qtdTimes,
					userId,
				},
			})
			.then((campeonato) => {
				return true;
			})
			.catch((err) => {
				return false;
			});
		return cad;
	},
};

type Partida = {
	data: string;
	horario: string;
	local: string;
	campeonatoId: string;
	time1Id: string;
	time2Id: string;
	placar1: number;
	placar2: number;
};

export const Partidas = {
	setPartida: async ({
		data,
		horario,
		local,
		campeonatoId,
		time1Id,
		time2Id,
		placar1,
		placar2,
	}: Partida) => {
		let cad = await prisma.partida
			.create({
				data: {
					data,
					horario,
					local,
					campeonatoId,
					time1Id,
					time2Id,
					placar1,
					placar2,
				},
			})
			.then((partida) => {
				return true;
			})
			.catch((err) => {
				return false;
			});
		return cad;
	},
};
