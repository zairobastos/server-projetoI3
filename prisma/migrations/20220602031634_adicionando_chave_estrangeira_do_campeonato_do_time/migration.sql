/*
  Warnings:

  - Added the required column `campeonatoId` to the `times` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `times` ADD COLUMN `campeonatoId` VARCHAR(191) NOT NULL;
