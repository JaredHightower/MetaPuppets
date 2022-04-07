import { useState } from 'react'
import { CgMathPlus, CgMathMinus } from 'react-icons/cg'
const style = {
  headers: `
    border-2
    relative rounded bg-teal-400  h-14 text-xl font-bold text-black z-100
  `,
  inActiveHeaders: `
    border-2
    rounded bg-teal-400  h-14 text-xl font-bold text-black z-100
  `,
  activeContent: `
   bg-white
    text-black  rounded-b-lg transition-all ease-in-out duration-700  -z-1
  `,
  inActiveContent: `
   bg-white
    text-black  rounded-b-lg  -z-1
  `,
}

export default function Accordion({ items, id }) {
  const [active, setActive] = useState(false)
  return (
    <>
      {active ? (
        <div className={!active ? style.inActiveContent : style.activeContent}>
          <li className={style.inActiveHeaders}>
            {items.question}
            <button onClick={() => setActive(!active)}>
              {active ? <CgMathMinus /> : <CgMathPlus />}
            </button>
          </li>
          {items.answer}
        </div>
      ) : (
        <li className={style.inActiveHeaders}>
          {items.question}
          <button onClick={() => setActive(!active)}>
            {active ? <CgMathMinus /> : <CgMathPlus />}
          </button>
        </li>
      )}
    </>
  )
}

// ;<li className={style.inActiveHeaders}>
//   {items.question}
//   <button onClick={() => setActive(!active)}>
//     {active ? <CgMathMinus /> : <CgMathPlus />}
//   </button>
// </li>

// ;<div className={style.headers}>
//   {active ? (
//     <motion.li
//       initial={{ y: 0, opacity: 0 }}
//       animate={{ y: 20, opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className={style.activeContent}
//     >
//       <li className={style.headers}>
//         {items.question}
//         <button onClick={() => setActive(!active)}>
//           {active ? <CgMathMinus /> : <CgMathPlus />}
//         </button>
//       </li>
//       {items.answer}
//     </motion.li>
//   ) : (
//     <li className={style.inActiveHeaders}>
//       {items.question}
//       <button onClick={() => setActive(!active)}>
//         {active ? <CgMathMinus /> : <CgMathPlus />}
//       </button>
//     </li>
//   )}
// </div>
// export default function Accordion({ items }) {
//   const [active, setActive] = useState(false)
//   return (
//     <div className={style.headers}>
//       {items.question}
//       <span>
//         {active ? (
//           <button onClick={() => setActive(!active)}>
//             <CgMathMinus />
//           </button>
//         ) : (
//           <button onClick={() => setActive(!active)}>
//             <CgMathPlus />
//           </button>
//         )}
//       </span>
//       {active ? (
//         <motion.li
//           initial={{ y: 0, opacity: 0 }}
//           animate={{ y: 20, opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className={style.subContent}
//         >
//           {items.answer}
//         </motion.li>
//       ) : null}
//     </div>
//   )
// }
