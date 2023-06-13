import { Inter } from 'next/font/google'
import  Chart  from '../components/Chart.jsx'
import Chart2 from '../components/Chart2.jsx'
import React, { createContext, useState } from "react";
import ChartDataProvider from '@/components/ChartDataProvider'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main>
      <ChartDataProvider>
      <Chart/>
      <Chart2/>
      </ChartDataProvider>
    </main>
  )
}

// https://www.youtube.com/watch?v=5LrDIWkK_Bc&t=2s&ab_channel=WebDevSimplified
