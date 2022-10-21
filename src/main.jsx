import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { 
  Nav,
  Home,
  Artigos,
  Sobre,
  Footer,
} from "./components/index.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
