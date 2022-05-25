import nodemailer from "nodemailer";
import "dotenv/config";

export const emailConfirmacao = (nome: string, email: string) => {
	const transport = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: 2525,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
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
};
