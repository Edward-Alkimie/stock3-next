import prisma from "@/lib/prisma";
import type { NextApiHandler,NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { username, graphNumber, graphLine, graphLineColor } = req.query;

    try {
        const newChart = await prisma.chart.create({
            data: {
                username: username,
                graphNumber: graphNumber,
                graphLine: graphLine,
                graphLineColor: graphLineColor,
            },
        });

        res.status(201).json({ chart: newChart });
    } catch (error) {
        res.status(400).json({ errorCode: error});
    }
}