import { Inter } from 'next/font/google'
import  Chart  from '../components/Chart'
import FetchStockRatio  from '@/components/Data'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Chart/>
      <FetchStockRatio/>

    </main>
  )
}
