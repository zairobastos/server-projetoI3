-- CreateTable
CREATE TABLE `pontosCorridos` (
    `id` VARCHAR(191) NOT NULL,
    `campeonatoId` VARCHAR(191) NOT NULL,
    `timeId` VARCHAR(191) NOT NULL,
    `pontos` INTEGER NOT NULL,
    `jogos` INTEGER NOT NULL,
    `vitorias` INTEGER NOT NULL,
    `empates` INTEGER NOT NULL,
    `derrotas` INTEGER NOT NULL,
    `golsPro` INTEGER NOT NULL,
    `golsContra` INTEGER NOT NULL,
    `saldoGols` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
