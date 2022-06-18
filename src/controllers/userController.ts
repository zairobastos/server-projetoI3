import { Request, Response } from "express";
import { emailRecuperarSenha } from "../model/mails/emailRecuperarSenha";
import { User } from "../model/users/userModel";

export const user = async (req: Request, res: Response) => {
	const { nome, email, senha, imagem } = req.body;
	let user = await User.seacherEmail(email);
	if (user) {
		res.status(400).send({ message: "Email já utilizado!" });
	} else {
		let usuario = await User.setUser({ nome, email, senha, imagem });
		usuario
			? res.status(201).send(res.redirect("http://localhost:3000/login"))
			: res.status(400).send({ message: "Erro ao cadastrar usuário!" });
	}
};

export const login = async (req: Request, res: Response) => {
	const { email, senha } = req.body;
	if (email && senha) {
		let usuario = await User.login({ email, senha });
		usuario
			? res.status(200).send({ message: "Usuário logado com sucesso!" })
			: res.status(400).send({ message: "Email ou senha inválidos!" });
	} else {
		res.status(400).send({ message: "Está faltando algum dado!" });
	}
};

export const deletarUsuario = async (req: Request, res: Response) => {
	const { id } = req.params;
	let usuario = await User.deleteUser(id);
	usuario
		? res.status(200).send({ message: "Usuário deletado com sucesso!" })
		: res.status(400).send({ message: "Erro ao deletar usuário!" });
};

export const updateUsuario = async (req: Request, res: Response) => {
	const { id, nome, email, senha, imagem } = req.body;
	let usuario = await User.updateUser({ id, nome, email, senha, imagem });
	usuario
		? res.status(200).send({ message: "Usuário atualizado com sucesso!" })
		: res.status(400).send({ message: "Erro ao atualizar usuário!" });
};

export const confirmarCadastro = async (req: Request, res: Response) => {
	const { id } = req.params;
	let usuario = await User.setAtivo(id);
	usuario
		? res.status(200).send(res.redirect("http://localhost:3000/login"))
		: res.status(400).send({ message: "Erro ao confirmar usuário!" });
};

export const recuperarSenha = async (req: Request, res: Response) => {
	const { email } = req.body;
	let usuario = await User.seacherEmail(email);
	if (usuario) {
		emailRecuperarSenha(usuario as any);
		res.status(200).redirect("http://localhost:3000/login");
		return true;
	} else {
		res.status(400).send({ message: "Email não cadastrado!" });
	}
};
