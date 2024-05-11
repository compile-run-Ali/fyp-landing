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
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ToTop'

export default function Home() {
  return (
    <div className='w-full bg-[#fdfcf5] px-10 xl:px-20'>
      {/* <NavBar/> */}
      <Header/>
      <Hero />
      <ScrollToTopButton />
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
      <Content />
      <hr/>
      {/* <About /> */}
      <Technologies />
      {/* <FAQ/> */}
      <Footer />
    </div>
  )
}
