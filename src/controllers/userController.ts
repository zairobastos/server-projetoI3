import { Request, Response } from "express";
import { User } from "../model/users/userModel";

export const user = async (req: Request, res: Response) => {
	const { nome, email, senha, imagem } = req.body;

	let usuario = User.setUser({ nome, email, senha, imagem });
	(await usuario)
		? res.status(201).send({ message: "Usuário cadastrado com sucesso!" })
		: res.status(400).send({ message: "Erro ao cadastrar usuário!" });
	console.log(usuario);
};
