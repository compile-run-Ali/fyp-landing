'use client'
import FAQ from '@/components/FAQ'

import Info from '@/components/Info'
import Intro from '@/components/Intro'
import NavBar from '@/components/NavBar'
import Uses from '@/components/Uses'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Technologies from '@/components/Technologies'
import Methodology from '@/components/Method'
import About from '@/components/About'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <div className='w-full bg-[#fdfcf5] px-10 xl:px-20'>
      {/* <NavBar/> */}
      <Header/>
      <Hero />
      <hr/>
      {/* <Intro/> */}
      <Info/>
      <hr/>

      <Methodology />
      <hr/>

      <Uses/>
      <hr/>

      <Navigation />
      <hr/>

      {/* <About /> */}
      <Technologies />
      {/* <FAQ/> */}
    </div>
  )
}
