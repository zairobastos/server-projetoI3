-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `ativo` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `recuperarSenha` VARCHAR(191) NULL;
