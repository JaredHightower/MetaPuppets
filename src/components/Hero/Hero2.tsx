import Image from 'next/image'
import HeroImg from '../assets/Images/NewHeroImage.svg'

const style = {
  wrapper: `
  px-5 py-5
  md:py-20
  2xl:px-20 2xl:py-10
  `,
  imageWrapper: `
    flex
    relative
    justify-center
    2xl:max-w-full
    `,
  textWrapper: `
    absolute
    text-white
    sm:inset-y-6 sm:inset-x-1/4
    md:inset-x-20 md:w-4/5
    2xl:inset-y-20 2xl: inset-x-1/4
    2xl:mx-32 2xl:px-10
    `,
  headerContainer: `
    sm:max-w-full text-center  sm:border-2 sm:border-slate-800 sm:rounded sm:p-5
    md:border-none md:py-20
    lg:text-left
    xl:py-32
    2xl:w-4/6
  `,
  h4: `
      text-neutral-400 
      sm:text-xs
      md:text-sm md:mb-1
      lg:mr-2 lg:mb-4
      xl:text-lg
      2xl:text-lg 2xl:text-xl
  `,
  h1: `
    sm:text-5xl
    md:text-5xl md:mb-1 md:mx-5
    lg:mx-0 lg:mt-2
    2xl:text-7xl
  `,
  h5: `
    text-base
    text-neutral-300 
    sm:inline-flex sm:text-xs
    md:mx-32
    lg:text-base lg:mr-96 lg:ml-0
    xl:mr-[35rem]
    2xl:w-3/4 2xl:text-lg
  `,
  span: `
      text-teal-400
  `,
}

export default function Hero2() {
  return (
    <div className={style.wrapper}>
      <div className={style.imageWrapper}>
        <Image src={HeroImg} />
        <div className={style.textWrapper}>
          <div className={style.headerContainer}>
            <h4 className={style.h4}>FIRST NFT WITH UTILITY ON DAY ONE</h4>
            <h1 className={style.h1}>
              The <span className={style.span}>Meta</span> Puppets
            </h1>
            <h5 className={style.h5}>
              TIRED OF THE WHITELIST COMPLAINTS IN THE NFT SPACE DONT WORRY WE
              HAVE A SOLUTIONS
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}
