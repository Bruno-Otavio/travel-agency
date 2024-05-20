const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const destinosData = JSON.parse(require("./data/destinos.json"));
const pontosData = JSON.parse(require("./data/pontoData.json"));
const hoteisData = JSON.parse(require("./data/hoteisData.json"));

async function main() {
    console.log("Start Seeding...");

    for (const d of destinosData) {
        const destino = await prisma.destinos.create({
            data: d
        });
        console.log(`Created Destino with id: ${destino.id}`)
    }

    for (const p of pontosData) {
        const ponto = await prisma.pontos.create({
            data: p
        });
        console.log(`Created Ponto with id: ${ponto.id}`);
    }

    for (const h of hoteisData) {
        const hotel = await prisma.hoteis.create({
            data: h
        });
        console.log(`Created Hotel with id: ${hotel.id}`);
    }

    console.log("Seeding Finished");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
