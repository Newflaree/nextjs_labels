import {MainLayout} from '@/components/layouts'
import { SlideShow} from '@/components/ui'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout title='Inicio'>
      <SlideShow />
    </MainLayout>
  )
}
