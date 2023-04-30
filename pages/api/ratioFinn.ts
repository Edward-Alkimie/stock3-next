import type { NextApiRequest, NextApiResponse } from 'next'
const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "cg2mgb1r01qq9k49eik0cg2mgb1r01qq9k49eikg" // Replace this
const finnhubClient = new finnhub.DefaultApi()

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    finnhubClient.companyBasicFinancials("AAPL", "all", (error: any, data: any, response: any) => {
        if (error)(
            res.status(200).json(error)
        )
        
        // console.log(api_key.apiKey)
        res.status(200).json(data)
    })


}

