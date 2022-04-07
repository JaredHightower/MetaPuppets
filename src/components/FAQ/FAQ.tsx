import Accordion from './Accordion'
import { motion, AnimatePresence } from 'framer-motion'
import { CgMathPlus, CgMathMinus } from 'react-icons/cg'
import { useState } from 'react'

const style = {
  flexContainer: `
        flex 
        flex-col h-full items-center text-white
    `,
  // subContainer: `
  //   flex
  //   flex-col justify-center  h-screen w-10/12  text-white p-0
  //   `,
  h1: `lg:my-10 lg:text-5xl`,
  ul: `
    flex
    flex-col  justify-items-center h-screen w-1/2 space-y-10 border-2 border-white px-24 py-10
  `,
}

export default function FAQ() {
  return (
    <div className={style.flexContainer}>
      <h1 className={style.h1}>FAQ</h1>
      <ul className={style.ul}>
        {data.map((items, index) => (
          <Accordion items={items} id={index} />
        ))}
      </ul>
    </div>
  )
}

const data = [
  {
    question:
      'What is Flex NFT Listing and how are is connect to the Meta Puppets?',
    answer: `
      Flex NFT Listing is a Whitelist listing platform created by the Meta Puppet team. 
      We created this to save both founder as well as investors time during the NFT presale process.
      `,
  },
  {
    question: 'Is your contract optimized to be gas efficient?',
    answer: `
      Yes. Our contract are design to provide a gas free experience.
      `,
  },
  {
    question: 'As an investor how do I benefit for the Meta Puppets project?',
    answer: `As mention in our road map proceeds from the Flex NFT Listing will be reinvested into the Meta Puppets project. 
      Proceeds will be used to buy whitelist spots from found and these spot will be given to our holder for free.`,
  },
  {
    question: 'When is the mint date?',
    answer: 'TBD',
  },
  {
    question: 'Mint per wallet and at what ETH',
    answer: `TBD`,
  },
]
