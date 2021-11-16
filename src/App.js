import { useEffect, useState } from "react"
import swal from "sweetalert"
import logo from "./logo.svg"
import loading from "./loading.svg"
import styles from "./App.module.css"
import Button from "./Button"
import { shuffleArray, getRandomNumber } from "./utils"
import AlbumCover from "./AlbumCover"

// Get token from https://developer.spotify.com/console/get-current-user-saved-tracks/
const apiToken =
  "BQCySmxSJQBZLtx9qV5RyzxQ7zkAhNHu-YdN8ttfyqO261yppQHf7oTydfgAPWfe-kzpC9ZVAjmiCDUnTQR5VHtoQBTWWiKOUlgo0ItBogxIXmHB0WwXm1hiUyfewY7uvymIs15RykGdzaC819pjKaGYZ1YMnJPW7vQdwpXrS1-MzlHy"

const App = () => {
  const [tracks, setTracks] = useState([])
  const [songsLoaded, setSongsLoaded] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(null)
  const [timeoutId, setTimeoutId] = useState()

  const chooseNewTrack = tracksList => {
    const randomIndex = getRandomNumber(tracksList.length)
    setCurrentTrack(tracksList[randomIndex].track)
    setTimeoutId(setTimeout(() => chooseNewTrack(tracksList), 30000))
  }

  useEffect(() => {
    fetch(`https://api.spotify.com/v1/playlists/37i9dQZF1DWWl7MndYYxge/tracks`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + apiToken,
      },
    })
      .then(response => response.json())
      .then(data => {
        setTracks(data.items)
        chooseNewTrack(data.items)
        setSongsLoaded(true)
      })
  }, [])

  const checkAnswer = id => {
    if (currentTrack.id === id) {
      clearTimeout(timeoutId)
      swal("Bravo !", "Tu as gagné", "success").then(() => chooseNewTrack(tracks))
    } else {
      swal("Essaye encore", "Ce n’est pas la bonne réponse", "error")
    }
  }

  if (!songsLoaded) {
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

  const propositions = shuffleArray([track1, track2, track3])

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1 className={styles.appTitle}>Bienvenue sur le Blindtest</h1>
      </header>
      <div className={styles.appImages}>
        <p>Nous avons chargé {tracks.length} chansons.</p>
        <audio controls autoPlay src={currentTrack.preview_url} />
      </div>
      <div className={styles.appButtons}>
        {propositions.map(track => (
          <Button onClick={() => checkAnswer(track.id)}>
            <AlbumCover track={track} />
            <div>{track.name}</div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default App
