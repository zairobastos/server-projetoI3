/*
  Warnings:

  - Added the required column `dataFim` to the `campeonatos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataInicio` to the `campeonatos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `campeonatos` ADD COLUMN `dataFim` VARCHAR(191) NOT NULL,
    ADD COLUMN `dataInicio` VARCHAR(191) NOT NULL;
