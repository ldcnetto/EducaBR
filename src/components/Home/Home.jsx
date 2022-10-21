import styles from "./Home.module.css"
import Banner from "../../assets/banner.png"

function Home() {
  return(
    <div>
      <section id="home" className={styles.home}>
        <div className={styles.overlay}>

        </div>
        <div className={styles.banner}>
          <img src={Banner} alt="Mesa com um relógio, alguns livros, alguns lápis e um notebook"/>
        </div>
        <div className={styles.text}>
          <h1>Plataforma de Recursos Educacionais Digitais</h1>
        </div>
      </section>
    </div>
  )
}

export default Home