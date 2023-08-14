import FAQ from '@/components/FAQ'
import Info from '@/components/Info'
import Intro from '@/components/Intro'
import NavBar from '@/components/NavBar'
import Uses from '@/components/Uses'
import { Layout } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <NavBar/>
    <Intro/>
    <Info/>
<Uses/>
    <FAQ/>
     
    </>
  )
}
