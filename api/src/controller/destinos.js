const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAll = async (req, res) => {
    const destinos = await prisma.destinos.findMany({
        include: {
            pontos: true,
            hoteis: true,
        }
    });
    res.status(202).json(destinos).end();
}

const get = async (req, res) => {
    const { id } = req.params;

    const destinos = await prisma.destinos
        .findUnique({
            where: { id: Number(id) }
        });

    res.status(202).json(destinos).end();
}

module.exports = {
    getAll,
    get
}
