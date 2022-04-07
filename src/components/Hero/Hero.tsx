import Image from 'next/image'
import HeroSVG from '../assets/Images/HERO-GRID.svg'
import PuppetSVG from '../assets/Images/PuppetGrid.svg'
import Marquee from 'react-fast-marquee'
import P1 from '../assets/Images/P1.png'
import P2 from '../assets/Images/P2.png'
import P3 from '../assets/Images/P3.png'
import P4 from '../assets/Images/P4.png'
import P5 from '../assets/Images/P5.png'
import P6 from '../assets/Images/P6.png'
import P7 from '../assets/Images/P7.png'
import P8 from '../assets/Images/P8.png'
import P9 from '../assets/Images/P9.png'
import P10 from '../assets/Images/P10.png'

const style = {
  h1Tag: `
  text-xl 
  lg:text-5xl 
  xl:text-7xl
  `,
  emptyDiv: `
  h-full w-full
  `,
  subText: `
  text-sm
  font-sans-Rajdhani font-[200] 
  lg:text-xl lg:font-[300] lg: w-3/4
  xl:font-[400]
  `,

  flexContainer: `
  relative
  flex
  flex-col text-white py-4 sm:px-4 
  lg:flex-row lg:pr-64 lg:py-20 
  xl:pr-72 
 `,

  heroTextContent: `
    lg:flex
    relative z-900 lg:flex-col w-1/3 lg:text-white lg:absolute lg:top-[40%] lg:right-0 lg:mr-4`,

  button: `
    font-bold
    text-base
    w-28
    px-2
    my-2
    border-[1px] border-teal-500 hover:bg-teal-400 hover:text-black transition ease-in-out duration-700
    `,

  puppetImgs: `flex flex-row mx-2 gap-5`,
  marquee: ` absolute h-30 ml-8 z-1`,
  imageContainer: `
  absolute 
  lg:inset-y-1/3 lg:w-[57vw] lg:py-6
  `,
}

export default function Hero() {
  return (
    <>
      <div className={style.flexContainer}>
        <div className={style.imageContainer}>
          <Marquee
            className={style.marquee}
            direction={'right'}
            gradient={false}
            speed={20}
          >
            <div className={style.puppetImgs}>
              <Image height={290} src={P1} />
              <Image height={290} src={P2} />
              <Image height={290} src={P3} />
              <Image height={290} src={P4} />
              <Image height={290} src={P5} />
              <Image height={290} src={P6} />
              <Image height={290} src={P7} />
              <Image height={290} src={P8} />
              <Image height={290} src={P9} />
              <Image height={290} src={P10} />
            </div>
          </Marquee>
        </div>
        <Image height={671} width={1153} src={PuppetSVG} />

        <div className={style.heroTextContent}>
          <h1 className={style.h1Tag}>META PUPPETS</h1>
          <span className={style.subText}>
            The Meta Puppets is an NFT project centered on building practical
            software for our community to benefit directly.
          </span>
          <button className={style.button}>FLEX LISTING</button>
        </div>
      </div>
    </>
  )
}
