import Image from 'next/image'
import GridsWithBanner from '../assets/Images/GridsWithBanner.svg'

const style = {
  container: `px-5`,
}

export default function Section3() {
  return (
    <div>
      <div className={style.container}>
        <Image src={GridsWithBanner} />
      </div>
    </div>
  )
}
