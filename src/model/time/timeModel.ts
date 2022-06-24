import { prisma } from "../../prisma";

type Time = {
	nome: string;
	abreviacao: string;
	escudo: string;
};

interface updateTime extends Time {
	id: string;
}

interface getTime extends Time {
	userId: string;
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
	getTimes: async (id: string) => {
		let times = await prisma.time
			.findMany({
				where: {
					userId: id,
				},
			})
			.then((time) => {
				return time;
			})
			.catch((err) => {
				return false;
			});
		return times;
	},
};
