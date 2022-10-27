import { useState, useEffect} from "react";
import styles from "./Artigos.module.css";
import telescope from "../../assets/2.jpg"

const url = "https://api.portalmec.c3sl.ufpr.br/v1/learning_objects";
const url1 = "https://api.portalmec.c3sl.ufpr.br/v1/learning_objects?page=2";


function Artigos() {
  const [categories, setCategories] = useState([])
  const [categories1, setCategories1] = useState([])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setCategories(data)
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  useEffect(() => {
    fetch(url1)
    .then(res => res.json())
    .then(data1 => {
      setCategories1(data1)
      console.log(data1)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const name = categories.map((d) => d.name)
  const type = categories.map((d) => d.object_type)
  const thumb = categories.map((d) => d.attachments.thumbnail)
  const description = categories.map((d) => d.description)
  const author = categories.map((d) => d.author)

  const name1 = categories1.map((d) => d.name)
  const type1 = categories1.map((d) => d.object_type)

  return(
    <div className={styles.all}>
      <section id="artigos" className={styles.artigos}>

        <h4>Artigos</h4>
        <h3>RED</h3>

        <p>Nesta área, você tem acesso a Recursos Educacionais Digitais, isto é, a vídeos, animações e a outros recursos destinados à educação.</p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={telescope} className={styles.image}/>
            <h2>{name[0]}</h2>
            <p>{type[0]}</p>
          </div>      

          <div className={styles.card}>
            <img src={telescope} className={styles.image}/>
            <h2>{name[1]}</h2>
            <p>{type[1]}</p>
          </div>  

          <div className={styles.card}>
            <img src={telescope} className={styles.image}/>
            <h2>{name[2]}</h2>
            <p>{type[2]}</p>
          </div>  

          <div className={styles.card}>
            <img src={telescope} className={styles.image}/>
            <h2>{name[3]}</h2>
            <p>{type[3]}</p>
          </div>     

          <div className={styles.card}>
            <img src={telescope} className={styles.image}/>
            <h2>{name[4]}</h2>
            <p>{type[4]}</p>
          </div>    

          <div className={styles.card}>
            <img src={telescope} className={styles.image}/>
            <h2>{name[5]}</h2>
            <p>{type[5]}</p>
          </div>    

          <div className={styles.card}>
            <img src={telescope} className={styles.image}/>
            <h2>{name[6]}</h2>
            <p>{type[6]}</p>
          </div>    

          <div className={styles.card}>
            <img src={telescope} className={styles.image}/>
            <h2>{name[7]}</h2>
            <p>{type[7]}</p>
          </div>    

          <div className={styles.card}>
          <img src={telescope} className={styles.image}/>
            <h2>{name[8]}</h2>
            <p>{type[8]}</p>
          </div>    

          <div className={styles.card}>
            <img src={telescope} className={styles.image}/>
            <h2>{name[9]}</h2>
            <p>{type[9]}</p>
          </div>    

          <div className={styles.card}>
            <img src={telescope} className={styles.image}/>
            <h2>{name[10]}</h2>
            <p>{type[10]}</p>
          </div>    

          <div className={styles.card}>
            <img src={telescope} className={styles.image}/>
            <h2>{name[11]}</h2>
            <p>{type[11]}</p>
          </div>   

          <div className={styles.card}>
            <img src={telescope} className={styles.image}/>
            <h2>{name1[0]}</h2>
            <p>{type1[0]}</p>
          </div>      

          <div className={styles.card}>
            <img src={telescope} className={styles.image}/>
            <h2>{name1[1]}</h2>
            <p>{type1[1]}</p>
          </div>  

          <div className={styles.card}>
            <img src={telescope} className={styles.image}/>
            <h2>{name1[2]}</h2>
            <p>Categoria: {type1[2]}</p>
          </div>   
        </div>

      </section>
    </div>
  )
}

export default Artigos