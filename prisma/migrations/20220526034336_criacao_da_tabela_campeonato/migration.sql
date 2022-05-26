-- CreateTable
CREATE TABLE `campeonatos` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `premiacao` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NULL,
    `situacao` ENUM('INICIADO', 'ABERTO', 'FINALIZADO', 'CANCELADO') NOT NULL DEFAULT 'ABERTO',
    `qtdTimes` INTEGER NOT NULL,
    `userId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
