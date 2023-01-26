import s from "@/components/XPButton/XPButton.module.css"

export default function XPButton({text}) {
  return (
    <button className={s.button}>
      <h1 className={s.text}>{text}</h1>
    </button>
  )
}