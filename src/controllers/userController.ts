import { Request, Response } from "express";
import { prisma } from "../prisma";
import nodemailer from "nodemailer";
import "dotenv/config";

export const user = async (req: Request, res: Response) => {
	const { nome, email, senha, imagem } = req.body;

	var transport = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: 2525,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});
	const usuario = await prisma.usuario.create({
		data: {
			nome,
			email,
			senha,
			imagem,
		},
	});
	transport.sendMail(
		{
			from: "Equipe Apito Final <zairobastos@gmail.com>",
			to: `${nome} <${email}>`,
			subject: "Bem vindo ao Apito Final",
		},
		(err, info) => {
			if (err) {
				console.log(err);
			} else {
				console.log("Email enviado com sucesso!");
			}
		}
	);
	return res.status(201).json({ data: usuario });
};
