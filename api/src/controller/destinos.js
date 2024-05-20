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

const create = async (req, res) => {
    const { nome, valor, data } = req.body;

    const destinos = await prisma.destinos.create({
        data: {
            nome,
            valor,
            data,
        }
    });

    res.status(204).json(destinos).end();
}

const update = async (req, res) => {
    const { id } = req.params;
    const { nome, valor, data } = req.body;

    const destinos = await prisma.destinos.update({
        where: { id },
        data: {
            nome,
            valor,
            data,
        }
    })
}

module.exports = {
    getAll,
    get
}
