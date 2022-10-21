import { useState, useEffect } from "react";
import styles from "./Artigos.module.css"

const url = "https://api.portalmec.c3sl.ufpr.br/v1/learning_objects";
const url1 = "https://api.portalmec.c3sl.ufpr.br/v1/learning_objects?page=2";
const url2 = "https://api.portalmec.c3sl.ufpr.br/v1/learning_objects?page=3";
const url3 = "https://api.portalmec.c3sl.ufpr.br/v1/learning_objects?page=4";
const url4 = "https://api.portalmec.c3sl.ufpr.br/v1/learning_objects?page=5";

function Artigos() {
  const [categories, setCategories] = useState([])

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
  
  return(
    <div>
      <section id="artigos" className={styles.artigos}>
        <div clasName={styles.card}>
          <img src={categories.map((d) => d.thumbnail)}/>            
          <h2>{categories.map((d) => d.name)}</h2>
          <p>{categories.map((d) => d.object_type)}</p>
        </div>
        
        <div className={styles.page}>
          <p>{categories.map((d) => d.author)}</p>
          <p>{categories.map((d) => d.description)}</p>
        </div>
      </section>
    </div>
  )
}

export default Artigos