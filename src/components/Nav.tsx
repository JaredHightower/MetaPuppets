const style = {
  flexContainer: `flex justify-end border-[1px] border-x-black border-t-black border-b-teal-500 py-2`,
  linkContainer: `flex flex-row justify-around items-center relative`,
  list: `items-center text-white cursor-pointer px-5 mx-5 `,
}

export default function Nav() {
  return (
    <div className={style.flexContainer}>
      <ul className={style.linkContainer}>
        <li className={style.list}>HOME</li>
        <li className={style.list}>TRAITS</li>
        <li className={style.list}>ROADMAP</li>
        <li className={style.list}>TEAM</li>
        <li className={style.list}>FAQ</li>
      </ul>
    </div>
  )
}
