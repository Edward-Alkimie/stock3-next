import React, { useState, useEffect } from 'react';

function DataFetch() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<errorType | null>(null);

  interface errorType {
    message: string;
  }
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/chartInfo/read');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setData(data.modifiedCharts);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data["1"][0].chartSeries}
      {data["1"][0].ratioLineName}
      {data["1"][0].ratioLineColor}
    </div>
  );
}

export default DataFetch;


// export default function FetchStockRatio(){
//     const userChartLayout = "http://localhost:3001/api/chartInfo/read"
//     const [userChart, setUserChart] =useState(null)
//     useEffect(() =>{
//         fetch(userChartLayout)
//             .then(response => response.json())
//             .then(jsonFile => setUserChart(jsonFile))
//             .catch(error => console.error("There has been problem with the fetch operation:", error))
//     },[])

//     if (userChart === null){
//         return <div>Loading...</div>
//     }
//     else{
//         return 

//     }

// }