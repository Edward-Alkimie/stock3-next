import { useContext, useState } from "react"
import  {ChartDataContext}  from "./ChartDataProvider"

export default function Chart2(){
    const {data, isLoading, error} = useContext(ChartDataContext)
    let chartData = null
    if (!isLoading){
        chartData = data.modifiedCharts
    }
    
}