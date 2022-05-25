import Crypto from "crypto";

const DADOS_CRIPTOGRAFAR = {
	algoritmo: process.env.CRIPTO_ALGO as string,
	segredo: process.env.CRIPTO_SECRET as string,
	tipo: process.env.CRIPTO_TIPO,
};

export const criptografar = (senha: string) => {
	const cipher = Crypto.createCipher(
		DADOS_CRIPTOGRAFAR.algoritmo,
		DADOS_CRIPTOGRAFAR.segredo
	);
	cipher.update(senha);
	return cipher.final(DADOS_CRIPTOGRAFAR.tipo as any);
};
