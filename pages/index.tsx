import Image from 'next/image'
import { Inter } from 'next/font/google'
import  Chart  from '../components/Chart'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Chart/>
    </main>
  )
}
