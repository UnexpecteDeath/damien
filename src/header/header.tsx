import { useContext, useState } from "react";
import styles from "./header.module.css";
import { ThemeContext } from "../App";

function Header() {

    const [visible, setVisible] = useState(false)
    const themeArr = useContext(ThemeContext)
    const handleClick = () => {
      themeArr?.setTheme(themeArr?.theme === "dark" ? "light" : "dark")
    }
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>DAMIEN</div>
          <nav className={styles.nav}>
            <button>Home</button>
            <button>About Me</button>
            <button>Portfolio</button>
            <button>Services</button>
          </nav>
          <button className={styles.btnContact}>Contact Me</button>
          <div onClick={handleClick} className={styles.themeBtn}>{themeArr?.theme}</div>
          <button className={themeArr?.theme === "dark" ? `${styles.burger}` : `${styles.burger} ${styles.dark}`} onClick={()=>setVisible(!visible)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={!visible ? styles.menu : `${styles.menu} ${styles.visible}`}>
          <nav className={styles.navMenu}>
            <button>Home</button>
            <button>About Me</button>
            <button>Portfolio</button>
            <button>Services</button>
          </nav>
          <button className={styles.btnContactMenu}>Contact Me</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
