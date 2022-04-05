import Image from 'next/image'
import HeroSVG from '../assets/Images/HERO-GRID.svg'
import PuppetSVG from '../assets/Images/PuppetGrid.svg'

const style = {
  h1Tag: `
  text-3xl 
  lg:text-4xl 
  xl:text-5xl
  `,
  // h1Tag: `text-7xl sx:text-sm`,
  emptyDiv: `
h-full w-full
  `,
  subText: `
  text-sm
  font-sans-Rajdhani font-[200] 
  lg:text-base lg:font-[300]
  xl:font-[400]
  `,
  //   subText: `
  //   text-lg
  //   max-w-prose mb-5 font-sans-Rajdhani font-[500]`,
  flexContainer: `
  relative
  flex
  flex-col text-white py-4 sm:px-4 lg:flex-row 
  lg:pr-64 lg:pl-0 xl:pr-72
 `,

  //   flexContainer: `
  //   relative
  //   flex
  //   flex-nowrap overflow-hidden h-[95vh] items-center w-full  text-white`,

  heroTextContent: `
    lg:flex
    lg:flex-col w-1/3 lg:text-white lg:absolute lg:top-[40%] lg:right-0 lg:mr-5`,

  button: `
    font-bold
    text-base
    w-28
    px-2
    my-2
    border-[1px] border-teal-500 hover:bg-teal-400 hover:text-black transition ease-in-out duration-700
    `,
  //   button: `
  //   self-start
  //   text-2xl
  //   font-bold
  //   w-40
  //   h-10
  //   border-[1px]
  //   border-teal-500
  //   hover:bg-teal-400
  //   hover:text-black
  //   transition
  //   ease-in-out
  //   duration-700
  //   `,
}

export default function Hero() {
  return (
    <div className={style.flexContainer}>
      <Image src={PuppetSVG} />
      <div className={style.heroTextContent}>
        <h1 className={style.h1Tag}>META PUPPETS</h1>
        <span className={style.subText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          ab amet iusto commodi. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Cupiditate ab amet iusto commodi.
        </span>
        <button className={style.button}>FLEX LISTING</button>
      </div>
    </div>
  )
}
