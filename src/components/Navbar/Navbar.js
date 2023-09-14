import s from "@/components/Navbar/Navbar.module.css"
import WindowBox from "@/components/WindowBox/WindowBox"
import XPButton from "@/components/XPButton/XPButton"
import ButtonGrid from "@/components/ButtonGrid/ButtonGrid"

export default function Navbar() {
  return (
    <div className={s.nav}>
      <WindowBox
        title={"Nav"}
        content={
          <div className={s.textWrapper}>
            <div>
              <h2 className={s.windowText}>
                ---------------------------------------------------
                This is the navbar, here you can navigate to anywhere
                on the site by pressing the buttons below <br/>
                ---------------------------------------------------
              </h2>
            </div>
            <ButtonGrid
              buttons={[
                <XPButton text={"Home"} link={""}/>,
                <XPButton text={"About"} link={"about"}/>,
                <XPButton text={"Posts"} link={"posts"}/>,
                <XPButton text={"Links"} link={"links"}/>,
                <XPButton text={"Projects"} link={"projects"}/>,
                <XPButton text={"Tools"} link={"tools"}/>,
                <XPButton text={"Don't click"} link={"secret"}/>,
              ]}
            />
            <img src="./dragondance.gif" className={s.gif} />
          </div>
        }
      />
    </div >
  )
}