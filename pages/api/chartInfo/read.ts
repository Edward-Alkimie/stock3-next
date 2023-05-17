import prisma from "@/lib/prisma"
import type {NextApiRequest, NextApiResponse} from 'next'
import { cachedDataVersionTag } from "v8";

function groupByKey(array: any[], key: string | number) {
    return array
      .reduce((hash: { [x: string]: any; }, obj: { [x: string]: string | number; }) => {
        if(obj[key] === undefined) return hash; 
        return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
      }, {})
 }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    const charts = await prisma.chart.findMany({
    })
    console.log(charts)

    const modifiedCharts = groupByKey(charts,"chartNumber")

    console.log(modifiedCharts)

    res.status(200).json({modifiedCharts});
}
