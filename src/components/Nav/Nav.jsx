import styles from "./Nav.module.css"
import Lupa from "../../assets/lupa.svg"
import Logo from "../../assets/logo.svg"

function Nav() {
  return(
      <div className={styles.all}>
        <nav id="navigation" className={styles.navigation}>

          <div className={styles.logotipo}>
            <a href="https://www.google.com.br">
              <img src={Logo} alt="red logo" height={60} width={60}/>
              <div className={styles.nomeLogo}>
                <p>EducaBR</p>
              </div>
            </a>
          </div>

        </nav>
      </div>
  )
}

export default Nav