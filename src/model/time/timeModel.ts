import { prisma } from "../../prisma";

type Time = {
	nome: string;
	abreviacao: string;
	escudo: string;
	campeonatoId: string;
};

interface updateTime extends Time {
	id: string;
}

export const Times = {
	setTime: async ({ nome, abreviacao, escudo, campeonatoId }: Time) => {
		let cad = await prisma.time
			.create({
				data: {
					nome,
					abreviacao,
					escudo,
					campeonatoId,
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
	updateTime: async ({
		id,
		nome,
		abreviacao,
		escudo,
		campeonatoId,
	}: updateTime) => {
		let upd = await prisma.time
			.update({
				where: {
					id,
				},
				data: {
					nome,
					abreviacao,
					escudo,
					campeonatoId,
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
};
