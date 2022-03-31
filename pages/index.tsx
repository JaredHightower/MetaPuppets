import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../src/components/Nav'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Meta Puppets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
    </>
  )
}

export default Home
