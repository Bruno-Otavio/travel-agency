const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAll = async (req, res) => {
    const hoteis = await prisma.hoteis.findMany();
    res.status(202).json(hoteis).end();
}

const get = async (req, res) => {
    const { id } = req.params;

    const hoteis = await prisma.hoteis
        .findUnique({
            where: { id: Number(id) }
        });

    res.status(200).json(hoteis).end();
}

const create = async (req, res) => {
    const { 
        nome, 
        valor, 
        avaliacao,
        email,
        site,
        locationId, 
    } = req.body;

    const hoteis = await prisma.hoteis.create({
        data: {
            nome,
            valor,
            avaliacao,
            email,
            site,
            locationId,
        }
    });

    res.status(201).json(hoteis).end();
}

const update = async (req, res) => {
    const { id } = req.params;
    const { 
        nome, 
        valor, 
        avaliacao,
        email,
        site,
        locationId, 
    } = req.body;

    const hoteis = await prisma.hoteis.update({
        where: { id: Number(id) },
        data: {
            nome,
            valor,
            avaliacao,
            email,
            site,
            locationId
        }
    })

    res.status(202).json(hoteis).end();
}

const del = async (req, res) => {
    const { id } = req.params;

    const hoteis = await prisma.hoteis.delete({
        where: { id: Number(id) }
    });

    res.status(202).json(hoteis).end();
}

module.exports = {
    getAll,
    get,
    create,
    update,
    del
}
