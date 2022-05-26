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
