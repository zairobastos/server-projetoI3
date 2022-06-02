-- AlterTable
ALTER TABLE `campeonatos` ADD COLUMN `tipoCampeonato` ENUM('PONTOS', 'PLAYOFF') NOT NULL DEFAULT 'PONTOS';
