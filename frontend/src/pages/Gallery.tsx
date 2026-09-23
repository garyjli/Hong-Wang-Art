import { artworks } from '../data/artworks'
import type { Artwork } from '../data/artworks'

/**
 * Use readonly to prevent the function from modifying artworks.
 */
function distributeArtworks(items: readonly Artwork[]) {
  const columns: [Artwork[], Artwork[], Artwork[]] = [[], [], []]

  items.forEach((artwork, index) => {
    columns[index % 3].push(artwork)
  })

  return columns
}

const columns = distributeArtworks(artworks)

/**
 * <main>
 *   <div>
 *     <figure>...</figure>
 *     <figure>...</figure>
 *     ...
 *   </div>
 * 
 *   <div>
 *     <figure>...</figure>
 *     <figure>...</figure>
 *     ...
 *   </div>
 * 
 *   <div>
 *     <figure>...</figure>
 *     <figure>...</figure>
 *     ...
 *   </div>
 * </main>
 */
function Gallery() {
  return (
    <main
      aria-label="Artwork gallery"
      className="grid grid-cols-3 w-[72%] mx-auto gap-4"
    >
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className="flex flex-col gap-6"
        >
          {column.map((artwork, artworkIndex) => (
            <figure key={artwork.id} className="group relative cursor-pointer">
              <img
                src={artwork.src}
                alt={artwork.alt}
                // Load the first artwork in each column eagerly
                loading={artworkIndex === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className="transition-[filter] duration-400 group-hover:brightness-50"
              />

              <span
                className="
                  absolute bottom-10 right-10 text-white opacity-0 text-[1.35rem]
                  font-light transition-opacity duration-400 group-hover:opacity-100
                  after:block after:h-px after:bg-current after:scale-x-0
                  after:transition-transform after:duration-400 hover:after:scale-x-98
                "
              >
                View Details&nbsp;&nbsp;→
              </span>
            </figure>
          ))}
        </div>
      ))}
    </main>
  )
}

export default Gallery
