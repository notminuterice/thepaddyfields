import s from "@/components/XPButton/XPButton.module.css"
import { useRouter } from "next/router"

export default function XPButton({ text, link }) {
  const router = useRouter()
  return (
    <button
      className={s.button}
      onClick={() => {
        router.push(`/${link}`)
      }}
    >
      <h1 className={s.text}>{text}</h1>
    </button>
  )
}