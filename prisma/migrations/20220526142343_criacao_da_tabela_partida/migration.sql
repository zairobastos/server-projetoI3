-- CreateTable
CREATE TABLE `partidas` (
    `id` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `horario` DATETIME(3) NOT NULL,
    `local` VARCHAR(191) NOT NULL,
    `campeonatoId` VARCHAR(191) NOT NULL,
    `time1Id` VARCHAR(191) NOT NULL,
    `time2Id` VARCHAR(191) NOT NULL,
    `placar1` INTEGER NOT NULL,
    `placar2` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
