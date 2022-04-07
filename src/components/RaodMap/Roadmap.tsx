const style = {
  wrapper: `
        flex
        flex-col text-white mx-10
    `,
  phaseContainers: `
    flex
    flex-row my-10
  `,
  highlight: `
   bg-teal-400
  h-1 w-24 mb-5
  `,
  h1: `text-white text-5xl`,
  h2Tag: `text-3xl w-80`,
  pTags: `text-lg w-2/4`,
}

export default function Roadmap() {
  return (
    <div>
      <div className={style.wrapper}>
        <h1 className={style.h1}>Roadmap</h1>
        <div className={style.highlight} />
        <div className={style.phaseContainers}>
          <h2 className={style.h2Tag}>Phase One:</h2>
          <span className={style.pTags}>
            <ul>
              <li>
                - Introduce the world to the Genesis Meta Puppets Collection.
              </li>
              <li> - Release our Minimal Viable Product (Flex NFT Listing)</li>
              <li>- List 10 NFT projects on our whitelist listing platform</li>
            </ul>
          </span>
        </div>
        <div className={style.phaseContainers}>
          <h2 className={style.h2Tag}>Phase Two:</h2>
          <span className={style.pTags}>
            <ul>
              <li>
                - Use profits from listing platform to buy whitelist spots from
                founders to give the Meta Puppets community free of charge.
              </li>
              <li>- Create Merchandise</li>
              <li>- Create Smart contracts platform</li>
              <li>- Release second Meta Puppets collection</li>
            </ul>
          </span>
        </div>
        <div className={style.phaseContainers}>
          <h2 className={style.h2Tag}>Phase Three:</h2>
          <span className={style.pTags}>Coming Soon!</span>
        </div>
        <div className={style.phaseContainers}>
          <h2 className={style.h2Tag}>Phase Four:</h2>
          <span className={style.pTags}>Coming Soon!</span>
        </div>
      </div>
    </div>
  )
}
