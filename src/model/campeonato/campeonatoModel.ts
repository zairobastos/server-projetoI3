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
interface updateCampeonato extends Campeonato {
	id: string;
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
	getCampeonatos: async (id: string) => {
		let lista: Object[] = [];
		const campeonato = await prisma.campeonato
			.findMany({
				where: {
					userId: id,
				},
			})
			.then((campeonato) => {
				return campeonato;
			})
			.catch((err) => {
				return false;
			});
		return campeonato;
	},
	deleteCampeonato: async (id: string) => {
		let deletado = await prisma.campeonato
			.delete({
				where: {
					id,
				},
			})
			.then((campeonato) => {
				return true;
			})
			.catch((err) => {
				return false;
			});
		return deletado;
	},
	updateCampeonato: async ({
		id,
		descricao,
		logo,
		nome,
		premiacao,
		qtdTimes,
		situacao,
		userId,
	}: updateCampeonato) => {
		let atualizado = await prisma.campeonato
			.update({
				where: {
					id,
				},
				data: {
					nome,
					descricao,
					logo,
					premiacao,
					qtdTimes,
					situacao,
					userId,
				},
			})
			.then((campeonato) => {
				return true;
			})
			.catch((err) => {
				return false;
			});
		return atualizado;
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

interface updatePartida extends Partida {
	id: string;
}

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
	deletePartida: async (id: string) => {
		let deletado = await prisma.partida
			.delete({
				where: {
					id,
				},
			})
			.then((partida) => {
				return true;
			})
			.catch((err) => {
				return false;
			});
		return deletado;
	},
	updatePartida: async ({
		id,
		campeonatoId,
		data,
		horario,
		local,
		placar1,
		placar2,
		time1Id,
		time2Id,
	}: updatePartida) => {
		let atualizado = await prisma.partida
			.update({
				where: {
					id,
				},
				data: {
					campeonatoId,
					data,
					horario,
					local,
					placar1,
					placar2,
					time1Id,
					time2Id,
				},
			})
			.then((partida) => {
				return true;
			})
			.catch((err) => {
				return false;
			});
		return atualizado;
	},
};
