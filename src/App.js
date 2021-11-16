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
  "BQCJhZ-HiVUn3sC84Jb7vRLJdzeBU1lnJ390rARzdJZQ0_rgFCH8kux1jnTWjXK9RP32HvtIAGZyos19sMOGgj96uTwk-pH-QoRjZHZWOv3MUvR3PEK05VUzKTvfss7twzJxKVfwq3MQehZIktRWE4hZikoGnQfhz64OL9OFP4IVhwYx"

const App = () => {
  const [tracks, setTracks] = useState("")
  const [songsloaded, setSongsloaded] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(null)
  const [timeoutId, setTimeoutId] = useState()

  const newTrack = tracksList => {
    const randomIndex = getRandomNumber(tracksList.length)
    setCurrentTrack(tracksList[randomIndex].track)
    setTimeoutId(setTimeout(() => newTrack(tracksList), 30000))
  }

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
        setTracks(data.items)
        newTrack(tracks)
        setSongsloaded(true)
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

  const propositions = shuffleArray([track1, track2, track3])

  const checkAnswer = id => {
    if (currentTrack.id === id) {
      swal("Bravo !", "Tu as gagné", "success").then(() => newTrack)
    } else {
      swal("Essaye encore", "Ce n’est pas la bonne réponse", "error")
    }
  }

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1 className={styles.appTitle}>Le meilleur Blindtest</h1>
      </header>
      <div className={styles.appImages}>
        <p>Nous avons chargé {tracks.length} chansons.</p>
      </div>
      <div>
        <audio controls autoPlay src={track1.preview_url} />
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
