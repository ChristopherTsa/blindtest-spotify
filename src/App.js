import swal from "sweetalert"
import logo from "./logo.svg"
import loading from "./loading.svg"
import styles from "./App.module.css"
import Button from "./Button"
import { shuffleArray, getRandomNumber } from "./utils"
import { useState, useEffect } from "react"
import AlbumCover from "./AlbumCover"

// Get token from https://developer.spotify.com/console/get-current-user-saved-tracks/
const apiToken =
  "BQA0dVfO-iKw3QgDU1rHUGFh96HQD2gp0jwta8O5suHBivrdrRwK8WhFH4sVwSz-X00zn-wT5Wbzh52FOC5VQcn1wEEIYBH4D3XyPNBb3dJjjoKSnXrLX8gsoliKMCRvH3Id-2sY9kRJAZ6A7H-YBhrcrIpRxmGHeOaUH6JArpGkDGLx"

const App = () => {
  const [text, setText] = useState("")
  const [tracks, setTracks] = useState("")
  const [songsloaded, setSongsloaded] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(null)
  useEffect(() => {
    fetch("https://api.spotify.com/v1/playlists/64AniTREImifrBpJNwW8FB/tracks", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + apiToken,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log("Réponse reçue ! Voilà ce que j'ai reçu : ", data)
        setText("Reçu !")
        setTracks(data.items)
        setSongsloaded(true)
        const randomIndex = getRandomNumber(data.items.length)
        setCurrentTrack(data.items[randomIndex].track)
      })
  }, [])

  if (!songsloaded) {
    return (
      <div className={styles.app}>
        <img src={loading} className={styles.appLogo} alt="logo" />
      </div>
    )
  }

  const randomIndex1 = getRandomNumber(tracks.length)
  const randomIndex2 = getRandomNumber(tracks.length)

  const track1 = currentTrack
  const track2 = tracks[randomIndex1].track
  const track3 = tracks[randomIndex2].track

  const checkAnswer = ({ id }) => {
    if (id === currentTrack.id) {
      swal("Bravo !", "Tu as gagné", "success")
    } else {
      swal("Essaye encore", "Ce n’est pas la bonne réponse", "error")
    }
  }

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1 className={styles.appTitle}>Le meilleur Blindtest</h1>
        <Button onClick={() => setText("Cliqué !")}>Cliquez moi !</Button>
        <p>{text}</p>
      </header>
      <div className={styles.appImages}>
        <p>Nous avons chargé {tracks.length} chansons.</p>
        <p>Titre de la première chanson : {tracks[0].track.name}.</p>
        <AlbumCover track={currentTrack} />
        <audio controls autoPlay src={track1.preview_url} />
      </div>
      <div className={styles.appButtons}>
        <Button onClick={() => checkAnswer(track1.id)}>
          <AlbumCover track={track1} />
          <div>{track1.name}</div>
        </Button>
        <Button onClick={() => checkAnswer(track2.id)}>
          <AlbumCover track={track2} />
          <div>{track2.name}</div>
        </Button>
        <Button onClick={() => checkAnswer(track3.id)}>
          <AlbumCover track={track3} />
          <div>{track3.name}</div>
        </Button>
      </div>
    </div>
  )
}

export default App
