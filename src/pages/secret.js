import s from "../styles/Secret.module.css"
import Navbar from "@/components/Navbar/Navbar"

export default function Secret() {
  return (
    <div className={s.background}>
      <div className={s.wrapper}>
        <img src="/smilecharlie.jpg" className={s.charlie}/>
        <Navbar />
      </div>
    </div>
  )
}