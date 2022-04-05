import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CgMathPlus, CgMathMinus } from 'react-icons/cg'
const style = {
  wrapper: `
     relative
 `,
  headers: `
    border-2
    border-emerald-100  px-5 mb-24
  `,
  subContent: `
    absolute
    bg-white text-black  rounded-b-lg h-24 top-6 px-5 py-2
`,
  span: `
  text-xl font-semibold float-right
  `,
}

const activeBox = {
  hidden: { y: '-100vh', opacity: 0 },
  animate: {},
  exit: { y: '100vh' },
}

export default function Accordion({ items }) {
  const [active, setActive] = useState(false)
  return (
    <div className={style.wrapper}>
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
      </div>
      {active ? (
        <AnimatePresence initial={false}>
          <motion.div className={style.subContent}>{items.answer}</motion.div>
        </AnimatePresence>
      ) : null}
    </div>
  )
}
