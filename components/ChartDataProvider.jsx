import React, { useState, createContext, useEffect} from "react";

export const ChartDataContext = createContext(null);


export default function ChartDataProvider({ children }){

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData();
  }, []);

    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3002/api/chartInfo/read');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setData(data);
          setIsLoading(false);
        } catch (error) {
          setError(error.message);
          setIsLoading(false);
        }
      };

    return (
        <ChartDataContext.Provider value={{data, isLoading, error}}>
            {children}
        </ChartDataContext.Provider>
    )
};