const style = {
  wrapper: `
        flex
        flex-col border-2 border-teal-100 text-white mx-10
    `,
  phaseContainers: `
    flex
    flex-row my-10
  `,
  h2Tag: `text-3xl w-80`,
  pTags: `text-lg w-2/4`,
}

export default function Roadmap() {
  return (
    <div>
      <h1>Roadmap</h1>
      <div className={style.wrapper}>
        <div className={style.phaseContainers}>
          <h2 className={style.h2Tag}>Phase One:</h2>
          <span className={style.pTags}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            veritatis magni excepturi dignissimos necessitatibus hic, nobis
            praesentium laudantium. Sapiente quaerat aliquid quo quia iste
            laboriosam deleniti maxime accusamus laudantium consectetur!
          </span>
        </div>
        <div className={style.phaseContainers}>
          <h2 className={style.h2Tag}>Phase Two:</h2>
          <span className={style.pTags}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            veritatis magni excepturi dignissimos necessitatibus hic, nobis
            praesentium laudantium. Sapiente quaerat aliquid quo quia iste
            laboriosam deleniti maxime accusamus laudantium consectetur!
          </span>
        </div>
        <div className={style.phaseContainers}>
          <h2 className={style.h2Tag}>Phase Three:</h2>
          <span className={style.pTags}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            veritatis magni excepturi dignissimos necessitatibus hic, nobis
            praesentium laudantium. Sapiente quaerat aliquid quo quia iste
            laboriosam deleniti maxime accusamus laudantium consectetur!
          </span>
        </div>
        <div className={style.phaseContainers}>
          <h2 className={style.h2Tag}>Phase Four:</h2>
          <span className={style.pTags}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            veritatis magni excepturi dignissimos necessitatibus hic, nobis
            praesentium laudantium. Sapiente quaerat aliquid quo quia iste
            laboriosam deleniti maxime accusamus laudantium consectetur!
          </span>
        </div>
      </div>
    </div>
  )
}
