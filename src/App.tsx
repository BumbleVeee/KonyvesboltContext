import './App.css'
import Tablazat from './components/Tablazat'
import UjKonyv from './components/UjKonyv'

function App() {
  return (
    <>
      <header>
        <h1>Könyvtár</h1>
      </header>
      <section><UjKonyv/></section>
      <article>
        <Tablazat/>
      </article>
      <footer>
        <p>Gubek Veronika</p>
      </footer>
    </>
  )
}

export default App
