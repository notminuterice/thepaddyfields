import s from "src/styles/Home.module.css"

export default function Home() {
  return (
    <div className={s.background}>
      <div className={s.wrapper}>
        <div className={s.header}>
          <img src="/statue.png" className={s.statue} />
          <h1 className={s.welcome}>WELCOMETO<br/>THERICEPADDY</h1>
          <img src="/statue.png" className={s.statue} />
        </div>
        <div className={s.stickers}>
          <img src="/alienow.png" className={s.sticker} />
          <img src="/anarchy-now.gif" className={s.sticker} />
          <img src="/bantimetravel.png" className={s.sticker} />
          <img src="/chrmevil.gif" className={s.sticker} />
          <img src="/combatbaby.gif" className={s.sticker} />
          <img src="/rave.gif" className={s.sticker} />
          <img src="/threec2002.gif" className={s.sticker} />
          <img src="/exefile.gif" className={s.sticker} />
        </div>
        <img src="/mantellafrog.png" className={s.frog} />
        <div className={s.posts}>
          <h1 className={s.postTitle}>Posts</h1>
        </div>
        <img src="/rentafriend.png" className={s.rentafriend}/>
      </div>
    </div>
  )
}
