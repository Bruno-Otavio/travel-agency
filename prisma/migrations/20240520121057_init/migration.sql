-- CreateTable
CREATE TABLE `Hoteis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `avaliacao` VARCHAR(512) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `site` VARCHAR(255) NOT NULL,
    `locationId` INTEGER NOT NULL,

    UNIQUE INDEX `Hoteis_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pontos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `endereco` VARCHAR(255) NOT NULL,
    `telefone` VARCHAR(14) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `locationId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Destinos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `data` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Hoteis` ADD CONSTRAINT `Hoteis_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `Destinos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pontos` ADD CONSTRAINT `Pontos_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `Destinos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
