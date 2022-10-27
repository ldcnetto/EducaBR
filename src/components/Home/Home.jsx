import styles from "./Home.module.css"
import Banner from "../../assets/banner.png"

function Home() {
  return(
    <div className={styles.all}>
      <section id="home" className={styles.home}>

        <div className={styles.text}>
          <h1>Recursos Educacionais<br/>Digitais</h1>
        </div>

        <div className={styles.banner}>
          <img src={Banner} alt="Mesa com um relógio, alguns livros, alguns lápis e um notebook"/>
        </div>
      </section>
    </div>
  )
}

export default Home