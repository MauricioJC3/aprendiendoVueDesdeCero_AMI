import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

//import './Bases/01-const-let';
//import './Bases/02-object'
//import './Bases/03-arrays'
//import './Bases/04-functions'
//import './Bases/05-deses-obj'
//import './Bases/06-deses-arr'
//import './Bases/07-imp-exp'
//import './Bases/todoEnuno'
//import './Bases/practicaImpor-Export/practicaImpor-Export'
//import './Bases/08-promises'
//import './Bases/09-fetch-api'
//import './Bases/10-axios'
//import './Bases/11-async-await'
import './Bases/conexionLaravel/conexionApi'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
  </div>
`