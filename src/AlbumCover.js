const AlbumCover = props => {
  const src = props.track.album.images[0].url
  const alt = "Album cover for " + props.track.album.name
  return <img src={src} style={{ width: 400, height: 400 }} alt={alt} />
}

export default AlbumCover
