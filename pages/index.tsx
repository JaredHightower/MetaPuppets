import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../src/components/Nav/Nav'
import Hero from '../src/components/Hero/Hero'

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
      <Hero />
    </>
  )
}

export default Home
