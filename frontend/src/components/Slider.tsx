import { useRef, useState } from 'react'
import type { Artwork } from '../data/artworks'

type SliderProps = {
  artworks: Artwork[]
}

/**
 * Receiving { artworks } destructures the props object.
 * 
 * This Slider component receives an "artworks" prop from the Home component.
 */
function Slider({ artworks }: SliderProps) {
  // Reference for the slider component
  const sliderRef = useRef<HTMLDivElement>(null)

  /**
   * Tracks the currently visible artwork's index in the artworks array.
   * Remembers the value between renders. "useState" tells React to re-render
   * (AKA run the entire Slider() function again) when the value changes,
   * which updates the dots and title.
   */
  const [activeIndex, setActiveIndex] = useState(0)
  const activeArtwork = artworks[activeIndex]

  function handleScroll() {
    const slider = sliderRef.current
    if (!slider) return

    const index = Math.round(slider.scrollLeft / slider.clientWidth)

    /**
     * Keep the index bounded between 0 and artworks.length - 1.
     * This prevents Math.round from rounding to an out-of-bounds index on
     * mobile Safari if the user scrolls the slider beyond the first or last image.
     */
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
    <section className="text-center">
      {/* Slider + dots container */}
      <div className="w-[90%] mx-auto">

        {/* Slider */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="
            relative flex h-208 overflow-x-scroll snap-x snap-mandatory scroll-smooth rounded-lg
            shadow-xl [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden
          "
        >
          {artworks.length === 0 ? (
            // Render this message when no artwork objects are received by this component
            <div className="relative text-[1.3rem] w-full top-[40%] italic">
              <p>No artwork to display.</p>
            </div>
          ) : (
            artworks.map(artwork => (
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
            ))
          )}
        </div>

        {/* Dots -- Keep this rendered as long as there are available artworks */}
        {artworks.length > 0 && (
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
                    size-4 rounded-full bg-[darkgray] transition-opacity duration-300
                    ${index === activeIndex ? 'opacity-100' : 'opacity-30'}
                  `}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Artwork Title -- Keep this rendered only when the particular artwork exists */}
      {activeArtwork && (
        <div className="mt-16">
          <p
            key={activeArtwork.id}
            className="
              font-['Raleway',sans-serif] font-light text-[1.9rem]
              italic animate-[partialFadeIn_500ms_ease]
            "
          >
            {activeArtwork.title}
          </p>
        </div>
      )}
    </section>
  )
}

export default Slider
