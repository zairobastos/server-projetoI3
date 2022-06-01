import { prisma } from "../../prisma";
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