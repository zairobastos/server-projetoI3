import { NextFunction, Request, Response } from "express";

const Auth = {
	private: async (res: Response, req: Request, next: NextFunction) => {
		let sucess: boolean = false;
		if (sucess) {
			next();
		} else {
			console.log("Usuário não autorizado!");
			res.redirect("http://localhost:3333/");
		}
	},
};

export default Auth;
