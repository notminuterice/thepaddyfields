import s from "@/components/Sticker/Sticker.module.css"

export default function Sticker({ filePath }) {
  return (
    <img src={filePath} className={s.sticker}/>
  )
}