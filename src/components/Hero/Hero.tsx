import Image from 'next/image'
import HeroSVG from '../assets/Images/HERO-GRID.svg'
import PuppetSVG from '../assets/Images/PuppetGrid.svg'

const style = {
  h1Tag: `text-3xl sx:text-sm pt-10`,
  // h1Tag: `text-7xl sx:text-sm`,
  subText: `
  text-sm
  font-sans-Rajdhani font-[200]
  `,
  //   subText: `
  //   text-lg
  //   max-w-prose mb-5 font-sans-Rajdhani font-[500]`,
  flexContainer: `
  relative
  flex
  flex-col text-white px-4
 `,

  //   flexContainer: `
  //   relative
  //   flex
  //   flex-nowrap overflow-hidden h-[95vh] items-center w-full  text-white`,
  //   img: `md:pr-20`,

  //   heroTextContent: `
  //   flex
  //   flex-col w-1/3 text-white absolute right-0 mr-10`,

  //   heroTextContent: `
  //   flex
  //   flex-col w-1/3 text-white absolute right-0 mr-10`,

  button: `
    font-bold
    text-base
    w-28
    px-2
    my-2
    border-[1px]
    border-teal-500
    hover:bg-teal-400
    hover:text-black
    transition
    ease-in-out
    duration-700
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
      <Image className={style.img} src={PuppetSVG} />
      <div className={style.heroTextContent}>
        <h1 className={style.h1Tag}>META PUPPETS</h1>
        <span className={style.subText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          ab amet iusto commodi. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Cupiditate ab amet iusto commodi.
        </span>
      </div>
      <button className={style.button}>FLEX LISTING</button>
    </div>
  )
}
