import prisma from "@/lib/prisma";
import type { NextApiHandler,NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { username, graphNumber, graphLine, graphLineColor } = req.query;

    try {
        console.log(req.body)
        const newChart = await prisma.chart.create({
            data: {
                ...req.body,
            },
        });

        return res.status(201).json({ chart: newChart });
    } catch (error) {
        return res.status(400).json({ errorCode: error});
    }
}