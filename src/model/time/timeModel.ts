import { prisma } from "../../prisma";

type Time = {
	nome: string;
	abreviacao: string;
	escudo: string;
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
};
