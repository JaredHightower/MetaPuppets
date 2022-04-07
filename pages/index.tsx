import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../src/components/Nav/Nav'
import Hero from '../src/components/Hero/Hero'
import Hero2 from '../src/components/Hero/Hero2'
import Section2 from '../src/components/Section2/Section2'
import Section3 from '../src/components/Section3/Section3'
import FAQ from '../src/components/FAQ/FAQ'
import SectionDivider from '../src/components/Divider/SectionDivider'
import Roadmap from '../src/components/RaodMap/Roadmap'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Meta Puppets</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <Hero2 />
      {/* <Hero /> */}
      <SectionDivider />
      <Section2 />
      <SectionDivider />
      <Roadmap />
      <SectionDivider />
      <FAQ />
    </>
  )
}

export default Home
