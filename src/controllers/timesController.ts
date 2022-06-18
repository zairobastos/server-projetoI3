import { Request, Response } from "express";
import { Times } from "../model/time/timeModel";
import sharp from "sharp";
import { unlink } from "fs/promises";

export const paginaTimes = (req: Request, res: Response) => {
	res.send("Times");
};

export const cadastrarTime = async (req: Request, res: Response) => {
	const { nome, abreviacao, escudo } = req.body;

	if (req.file) {
		const filename = `${req.file.filename}.png`;
		await sharp(req.file.path)
			.toFormat("png")
			.toFile(`./public/images/${filename}`);

		await unlink(req.file.path);
		const img = `./public/images/${filename}`;
		let time = await Times.setTime({ nome, abreviacao, escudo: img });
		time
			? res.status(201).send(res.redirect("http://localhost:3000/times"))
			: res.status(400).send({ message: "Erro ao cadastrar time!" });
	} else {
		res.status(400).send({
			message: "Não foi possível cadastrar o time",
		});
	}
};

export const deleteTime = async (req: Request, res: Response) => {
	const { id } = req.params;
	let time = await Times.deleteTime(id);

	time
		? res.status(200).send({ message: "Time deletado com sucesso!" })
		: res.status(400).send({ message: "Erro ao deletar time!" });
};

export const updateTime = async (req: Request, res: Response) => {
	const { id, nome, abreviacao, escudo } = req.body;
	let atualizado = await Times.updateTime({
		id,
		nome,
		abreviacao,
		escudo,
	});

	atualizado
		? res.status(200).send({ message: "Time atualizado com sucesso!" })
		: res.status(400).send({ message: "Erro ao atualizar time!" });
};
