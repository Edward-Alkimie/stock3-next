// import prisma from "@/lib/prisma";
import {PrismaClient} from  "@prisma/client"

const prisma = new PrismaClient()
import type { NextApiHandler,NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { username, chartNumber,chartSeries, ratioLineName,ratioLineColor } = req.body;

    if (req.method === "POST"){
        try {
            const newChart = await prisma.chart.create({
                data: {
                    ...req.body
                },
            });
            res.status(201).json({ chart: newChart });
        } catch (error) {
            res.status(400).json({ error});
        }
    }else{
        res.status(405).end(`Method ${req.method} Not allowed`)
    }

}