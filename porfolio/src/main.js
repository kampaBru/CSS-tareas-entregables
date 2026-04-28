// src/main.js
import './style.css'
import javascriptLogo from './assets/images/javascript.svg'
import viteLogo from './assets/images/vite.svg'
import { setupCounter } from './counter.js'

// Espera a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {
  // Busca el div donde quieres inyectar el contenido
  const app = document.querySelector('#app')
  if (!app) return  // si no existe, no hace nada

  // Inserta tu contenido dinámico
  app.innerHTML = `
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      <h1>Hello Vite!</h1>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      <p class="read-the-docs">
        Click on the Vite logo to learn more
      </p>
    </div>
  `

  // Inicializa el contador del botón
  setupCounter(document.querySelector('#counter'))
})