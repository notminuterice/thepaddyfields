import s from "@/components/ButtonGrid/ButtonGrid.module.css"

export default function ButtonGrid({ buttons }) {
  return (
    <div className={s.buttonGrid}>
      {buttons.map(button => {
        return (
          <div className={s.buttonWrapper}>
            {button}
          </div>
        )
      })}
    </div>
  )
}