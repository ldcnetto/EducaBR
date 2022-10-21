import styles from "./Footer.module.css"
import Logo from '../../assets/logo.svg'

function Footer() {
  return(
    <div>
      <footer id="footer" className={styles.footer}>
        
        <div className={styles.colC}>
          <div className={styles.logotipo}>
            <a href="https://www.google.com.br">
              <img src={Logo} alt="red logo" height={60} width={60}/>
            </a>
          </div>
          <div className="nomeLogo">
            <a href="https://www.google.com.br">EducaBR</a>
          </div>
        </div>
          
        <div className={styles.colD}>
          <h3>contato</h3>
          <p>(99) 99999-9999</p>
          <p>contato@EducaBR.com</p>
          <p>©2022 EducaBR. Todos os direitos reservados.</p>
        </div>
        
      </footer>
    </div>
  )
}

export default Footer