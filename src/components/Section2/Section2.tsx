import Image from 'next/image'
import Puppts from '../assets/Images/Section2-Puppets.svg'
const style = {
  flexContainer: `
    flex
    flex-row px-20
    `,
  textContainer: `
  flex
  flex-col justify-center text-white w-1/2
  `,
  h1Tag: `
    xl:text-3xl
  `,
  highlight: `
   bg-teal-400
  h-1 w-48 mb-5
  `,
  imageStyle: `
    float-right
    `,
}

export default function Section2() {
  return (
    <div className={style.flexContainer}>
      <div className={style.textContainer}>
        <h1 className={style.h1Tag}>
          Who are the Meta Puppets
          <div className={style.highlight} />
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit optio
          dolorem repellat veritatis, cupiditate facilis impedit maiores dolorum
          est corrupti adipisci voluptates nesciunt atque praesentium illum
          asperiores iure eum sint?
        </p>
      </div>
      <div className={style.imageStyle}>
        <Image width={564} height={270} src={Puppts} />
      </div>
    </div>
  )
}
