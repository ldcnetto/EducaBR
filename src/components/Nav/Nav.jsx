import styles from "./Nav.module.css"
import Lupa from "../../assets/lupa.svg"
import Logo from "../../assets/logo.svg"

function Nav() {
  return(
      <div>
        <nav id="navigation" className={styles.navigation}>
      
          <div className={styles.logotipo}>
            <a href="https://www.google.com.br">
              <img src={Logo} alt="red logo" height={60} width={60}/>
              <div className={styles.nomeLogo}>
                <p>EducaBR</p>
              </div>
            </a>
          </div>

          <div className={styles.pesquisa}> 
            <button>
              <img src={Lupa} alt="lupa" height={30} width={30}/>
            </button>
          </div>

        </nav>
      </div>
  )
}

export default Nav