import { Request, Response } from "express";
import { prisma } from "../prisma";
import { emailConfirmacao } from "../mails/emailConfirmacao";

export const user = async (req: Request, res: Response) => {
	const { nome, email, senha, imagem } = req.body;
	const usuario = await prisma.usuario.create({
		data: {
			nome,
			email,
			senha,
			imagem,
		},
	});
	emailConfirmacao(usuario.nome, usuario.email);
	return res.status(201).json({ data: usuario });
};
