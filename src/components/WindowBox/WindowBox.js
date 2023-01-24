import s from "@/components/WindowBox/WindowBox.module.css"

export default function WindowBox({title}) {
  return (
    <div className={s.mainWindow}>
      <div className={s.top}>
        <h1 className={s.titleText}>{title}</h1>
        <button className={s.button} id={s.minimise}>
          <img className={s.buttonImage} id={s.minimiseImage} src="data:image/svg+xml;charset=utf-8,%3Csvg width='6' height='2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000' d='M0 0h6v2H0z'/%3E%3C/svg%3E" />
        </button>
        <button className={s.button}>
          <img className={s.buttonImage} src="data:image/svg+xml;charset=utf-8,%3Csvg width='9' height='9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 0H0v9h9V0zM8 2H1v6h7V2z' fill='%23000'/%3E%3C/svg%3E" />
        </button>
        <button className={s.button} id={s.close}>
          <img className={s.buttonImage} src="data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H5v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1V5h1V4h1V3H2V2H1V1H0V0z' fill='%23000'/%3E%3C/svg%3E"/>
        </button>
      </div>
    </div>
  )
}