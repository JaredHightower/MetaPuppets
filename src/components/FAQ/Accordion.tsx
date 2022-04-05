import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CgMathPlus, CgMathMinus } from 'react-icons/cg'
const style = {
  headers: `
    border-2
    rounded bg-teal-400  px-10 py-9  h-24 mb-32 text-xl font-bold text-black
  `,
  subContent: `
  bg-white 
  text-black  rounded-b-lg h-24 px-10 py-5 mix-blend-lighten
`,
  span: `
  text-xl font-semibold float-right
  `,
}

export default function Accordion({ items }) {
  const [active, setActive] = useState(false)
  return (
    <div className={style.headers}>
      {items.question}
      <span className={style.span}>
        {active ? (
          <button onClick={() => setActive(!active)}>
            <CgMathMinus />
          </button>
        ) : (
          <button onClick={() => setActive(!active)}>
            <CgMathPlus />
          </button>
        )}
      </span>
      {active ? (
        <AnimatePresence>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 30, opacity: 1 }}
            exit={{ opacity: 0 }}
            className={style.subContent}
          >
            {items.answer}
          </motion.div>
        </AnimatePresence>
      ) : null}
    </div>
  )
}
