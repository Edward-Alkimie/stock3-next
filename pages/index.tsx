import { Inter } from 'next/font/google'
import  Chart  from '../components/Chart'
import FetchStockRatio  from '@/components/Data'
import React, { createContext, useState } from "react";
import ChartDataConext from '@/components/ChartDataContext'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main>
      <ChartDataConext.Provider value=UserContext={}>
      <Chart/>
      <FetchStockRatio/>
      <>
    </main>
  )
}
