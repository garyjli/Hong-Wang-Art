import { artworks, sliderArtworkIds } from '../data/artworks'
import Slider from '../components/Slider'

/**
 * Array of Artwork objects with ids that match the ids in the sliderArtworkIds array
 */
const sliderArtworks = sliderArtworkIds.map(id => {
  const artwork = artworks.find(artwork => artwork.id === id)

  if (!artwork) {
    throw new Error(`Slider artwork ${id} was not found`)
  }

  return artwork
})

function Home() {
  return (
    <main>
      <Slider artworks={sliderArtworks} />
    </main>
  )
}

export default Home
