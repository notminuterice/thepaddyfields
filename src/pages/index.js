import s from "src/styles/Home.module.css"
import Stickers from "@/components/Stickers/Stickers"
import WindowBox from "@/components/WindowBox/WindowBox"
import XPButton from "@/components/XPButton/XPButton"

export default function Home({ stickerPaths }) {
  return (
    <div className={s.background}>
      <div className={s.wrapper}>
        <div className={s.header}>
          <div className={s.welcomeWrapper}>
            <img src="/statue.png" className={s.statue} />
            <h1 className={s.welcome}>WELCOMETO<br/>THEPADDYFIELDS</h1>
            <img src="/statue.png" className={s.statue} />
          </div>
          <Stickers stickerPaths={stickerPaths} />
        </div>
        <img src="/mantellafrog.png" className={s.frog} />
        <div className={s.posts}>
          <h1 className={s.postTitle}>Posts</h1>
        </div>
        <div className={s.nav}>
          <WindowBox
            title={"Nav"}
            buttons={[
              <XPButton text={"Posts"} />,
              <XPButton text={"Cool links"} />
            ]}
            content="
              ---------------------------------------------------
              This is the navbar, here you can navigate to anywhere
              on the site by pressing the buttons below
              \n---------------------------------------------------
            "
          />
        </div >
        <img src="/rentafriend.png" className={s.rentafriend}/>
      </div>
    </div>
  )
}


export async function getStaticProps(context) {
  const fs = require("fs")
  const paths = fs.readdirSync("./public/stickers").map(fileName => `./stickers/${fileName}`)
  return ({
    props: {
      stickerPaths: paths
    }
  })
}