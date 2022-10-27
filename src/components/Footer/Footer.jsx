import styles from "./Footer.module.css"
import Logo from '../../assets/logo.svg'

function Footer() {
  return(
    <div className={styles.all}>
      <footer id="footer" className={styles.footer}>
        
        <div className={styles.colC}>
          <div className={styles.logotipo}>
            <a href="https://www.google.com.br">
              <img src={Logo} alt="red logo" height={90} width={90}/>
            </a>
          </div>
          <div className="nomeLogo">
            <a href="https://www.google.com.br">EducaBR</a>
          </div>
        </div>
          
        <div className={styles.colD}>
          <h2>Contato</h2>
          <p>(99) 99999-9999</p>
          <p>contato@EducaBR.com</p>
          <p>©2022 EducaBR. Todos os direitos reservados.</p>
        </div>
        
      </footer>
    </div>
  )
}

export default Footer