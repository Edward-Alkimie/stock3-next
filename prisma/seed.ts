
import {PrismaClient} from  "@prisma/client"

const prisma = new PrismaClient()

async function load(){
    await prisma.chart.deleteMany()

    const kevin = await prisma.chart.create({
        data: {
            username: 'kevin1',
            graphNumber: 1,
            graphLine: 'bookValue',
            graphLineColor: 'black',
        },
    })
    console.log({kevin})
}

load()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

