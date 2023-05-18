
import { useEffect, useState } from "react"

export async function fetchStockRatio(){
    const userChartLayout = "http://localhost:3000/api/chartInfo/read"
    const [userChart, setUserChart] =useState("")
    useEffect(() =>{
        fetch(userChartLayout)
            .then(response => response.json())
            .then(jsonFile => setUserChart(jsonFile))
            .catch(error => console.error("There has been problem with the fetch operation:", error))
    },[])
}