'use client'
import FAQ from '@/components/FAQ'

import Info from '@/components/Info'
import Intro from '@/components/Intro'
import NavBar from '@/components/NavBar'
import Uses from '@/components/Uses'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className='w-full'>
      {/* <NavBar/> */}
      <Header/>
      <Hero />
      {/* <Intro/> */}
      <Info/>
      <Uses/>
      <FAQ/>
    </div>
  )
}
