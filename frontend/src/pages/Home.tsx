import { artworks, sliderArtworkIds } from '../data/artworks'
import Slider from '../components/Slider'

/**
 * Finds all artwork objects with an id that matches an
 * id in sliderArtworkIds, and puts them into an array.
 * 
 * Note: sliderArtworks skips missing artworks, i.e. if
 * sliderArtworkIds requests ids 1, 2, 3 but no artwork
 * exists with an id of 2, then the slider component
 * receives: [artwork1, artwork3]
 */
const sliderArtworks = sliderArtworkIds.flatMap(id => {
  const artwork = artworks.find(artwork => artwork.id === id)

  return artwork ? [artwork] : []
})

function Home() {
  return (
    <main>
      <Slider artworks={sliderArtworks} />
    </main>
  )
}

export default Home
