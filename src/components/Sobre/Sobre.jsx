import styles from "./Sobre.module.css"
import Estudando from '../../assets/estudo.jpg'

function Sobre() {
  return(
    <div>
      <section id="sobre" className={styles.sobre}>

        <div className={styles.colA}>
            <header>
                <h4>SOBRE NÓS</h4>
                <h2>Entenda quem somos</h2>
            </header>

            <div className={styles.content}>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>

            </div>
        </div>

        <div className={styles.image}>
            <img src={Estudando} alt="adolescente estudando" />
        </div>
        
      </section>
    </div>
  )
}

export default Sobre