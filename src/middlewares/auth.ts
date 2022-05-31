import { NextFunction, Request, Response } from "express";

const Auth = {
	private: async (res: Response, req: Request, next: NextFunction) => {
		let sucess: boolean = false;
		if (sucess) {
			next();
		} else {
			res.status(403).send({ message: "Usuário não autorizado!" });
		}
	},
};

export default Auth;
