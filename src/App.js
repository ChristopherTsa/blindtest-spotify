import swal from "sweetalert"
import logo from "./logo.svg"
import loading from "./loading.svg"
import styles from "./App.module.css"
import Button from "./Button"
import { shuffleArray, getRandomNumber } from "./utils"
import { useState } from "react"

// Get token from https://developer.spotify.com/console/get-current-user-saved-tracks/
const apiToken = "<<Copiez le token de Spotify ici>>"

const App = () => {
  const [text, setText] = useState("")
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1 className={styles.appTitle}>Bienvenue les gars sur le Blindtest</h1>
        <p>Il va falloir modifier le code pour faire un vrai Blindtest !</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => setText("Cliqué !")}>Cliquez moi !</button>
        <p>{text}</p>
        <a className={styles.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
