import { prisma } from "../../prisma";
import { criptografar } from "../criptografia/criptografia";
import { emailConfirmacao } from "../mails/emailConfirmacao";

type Usuario = {
	nome: string;
	email: string;
	senha: string;
	imagem: string;
};

export const User = {
	setUser: async ({ nome, email, senha, imagem }: Usuario) => {
		let cad = await prisma.usuario
			.create({
				data: {
					nome,
					email,
					senha: criptografar(senha),
					imagem,
				},
			})
			.then((usuario) => {
				emailConfirmacao(usuario.nome, usuario.email);
				return true;
			})
			.catch((err) => {
				return false;
			});
		return cad;
	},
};
