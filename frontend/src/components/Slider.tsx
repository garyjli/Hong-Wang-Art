import { useRef, useState } from 'react'
import type { Artwork } from '../data/artworks'

type SliderProps = {
  artworks: Artwork[]
}

/**
 * Doing { artworks } destructures the props object.
 */
function Slider({ artworks }: SliderProps) {
  // Reference for the slider component
  const sliderRef = useRef<HTMLDivElement>(null)

  /**
   * Tracks the currently visible artwork's index in the artworks array.
   * Remembers the value between renders. "useState" tells React to render 
   * again when the value changes, which updates the dots and title.
   */
  const [activeIndex, setActiveIndex] = useState(0)

  const activeArtwork = artworks[activeIndex]
  if (!activeArtwork) return null

  function handleScroll() {
    const slider = sliderRef.current
    if (!slider || slider.clientWidth === 0) return

    const index = Math.round(slider.scrollLeft / slider.clientWidth)
    // Bound the index between 0 and artworks.length - 1 (unnecessary?)
    setActiveIndex(Math.max(0, Math.min(index, artworks.length - 1)))
  }

  function scrollToArtwork(index: number) {
    const slider = sliderRef.current
    if (!slider) return

    slider.scrollTo({
      left: index * slider.clientWidth
    })
  }

  return (
    <section className="pt-16 m-0 text-center">
      {/* Slider and dots wrapper */}
      <div className="w-[90%] mx-auto">
        {/* Slider */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="
            flex h-208 overflow-x-scroll snap-x snap-mandatory scroll-smooth rounded-lg
            shadow-xl [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden
          "
        >
          {artworks.map(artwork => (
            <div
              key={artwork.id}
              className="h-full w-full min-w-0 shrink-0 snap-center"
            >
              <img
                src={artwork.src}
                alt={artwork.alt}
                draggable={false}
                className="block h-full w-full object-contain select-none"
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-14 flex justify-center items-center gap-12">
          {artworks.map((artwork, index) => (
            <button
              key={artwork.id}
              type="button"
              onClick={() => scrollToArtwork(index)}
              className="grid place-items-center rounded-[50%] cursor-pointer"
            >
              <span
                className={`
                  size-4 rounded-[50%] bg-[darkgray] transition-opacity duration-300
                  ${index === activeIndex ? 'opacity-100' : 'opacity-30'}
                `}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Artwork title wrapper */}
      <div className="p-0 my-16">
        <p
          key={activeArtwork.id}
          className="
            p-0 m-0 font-['Raleway',sans-serif] font-light
            text-[2rem] italic animate-[fadeIn_500ms_ease]
          "
        >
          {activeArtwork.title}
        </p>
      </div>
    </section>
  )
}

export default Slider
