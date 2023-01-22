import s from "@/components/Stickers/Stickers.module.css"
import Sticker from "../Sticker/Sticker"

export default function Stickers({ stickerPaths }) {
  return (
    <div className={s.stickers}>
      {stickerPaths.map(path => {
        return(<Sticker filePath={path}/>)
      })}
    </div>
  )
}

