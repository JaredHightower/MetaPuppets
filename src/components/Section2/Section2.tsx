import Image from 'next/image'
import Puppts from '../assets/Images/Section2-Puppets.svg'
import Coffin from '../assets/Images/Coffin.png'
import { motion, AnimatePresence } from 'framer-motion'

const style = {
  flexContainer: `
    flex
    flex-row relative justify-around px-40 py-20
    `,
  textContainer: `
  flex
  flex-col justify-center text-white w-1/2
  `,
  h1Tag: `
    xl:text-5xl
  `,
  highlight: `
   bg-teal-400
  h-1 w-48 mb-5
  `,
  span: `text-xl w-3/4`,
}

export default function Section2() {
  return (
    <div className={style.flexContainer}>
      <div className={style.textContainer}>
        <h1 className={style.h1Tag}>
          Who are the Meta Puppets
          <div className={style.highlight} />
        </h1>
        <span className={style.span}>
          The Meta Puppets is a collection of 7777 uniquely hand drawn and code
          generated NFT characters. Our mission is to redefine how the current
          presale NFT market operates. As a Meta Puppets holder, you will gain
          exclusive access to real-world web applications you can directly
          benefit from on day one.
        </span>
      </div>
      <motion.div
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ repeat: Infinity }}
      >
        <Image width={400} height={550} src={Coffin} />
      </motion.div>
    </div>
  )
}
