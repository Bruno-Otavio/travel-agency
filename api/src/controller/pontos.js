const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAll = async (req, res) => {
    const pontos = await prisma.pontos.findMany();
    res.status(202).json(pontos).end();
}

const get = async (req, res) => {
    const { id } = req.params;

    const pontos = await prisma.pontos
        .findUnique({
            where: { id: Number(id) }
        });

    res.status(200).json(pontos).end();
}

const create = async (req, res) => {
    const { 
        nome, 
        endereco, 
        telefone,
        valor, 
        locationId,
    } = req.body;

    const pontos = await prisma.pontos.create({
        data: {
            nome,
            endereco,
            telefone,
            valor,
            locationId,
        }
    });

    res.status(201).json(pontos).end();
}

const update = async (req, res) => {
    const { id } = req.params;
    const { 
        nome,
        endereco,
        telefone,
        valor, 
        locationId,
    } = req.body;

    const pontos = await prisma.pontos.update({
        where: { id },
        data: {
            nome,
            endereco,
            telefone,
            valor,
            locationId,
        }
    })

    res.status(202).json(pontos).end();
}

const del = async (req, res) => {
    const { id } = req.params;

    const pontos = await prisma.pontos.delete({
        where: { id }
    });

    res.status(202).json(pontos).end();
}

module.exports = {
    getAll,
    get,
    create,
    update,
    del
}
