import styles from "./App.module.css"
import { useState } from "react";
import { 
  Nav,
  Home,
  Artigos,
  Sobre,
  Footer,
} from "./components/index.jsx"

// Inserir caixa de pesquisa e fazer ela ser funcional encima da API
// Caixa de pesquisa igual a do insta
// Colocar uma section para estatísticas (quantos artigos estão disponíveis)
// Limitar a 15 artigos por página (não sei se é possível, sabendo q a API só retorna 12)
// Deixar a imagem do Sobre nós quadrada e com bordas arredondadas

function App() {
  return(
    <>
      <Nav />
      <Home />
      <Artigos />
      <Sobre />
      <Footer />
    </>
  )
}

export default App