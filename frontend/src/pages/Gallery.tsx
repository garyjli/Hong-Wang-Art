import { useLayoutEffect, useRef, useState } from 'react'
import { artworks } from '../data/artworks'
import type { Artwork } from '../data/artworks'

/**
 * This function builds the artwork arrangements for the columns of the gallery.
 * The 'items' parameter is the array of Artwork objects, defined in artworks.ts.
 */
function distributeArtworks(items: readonly Artwork[], columnWidth: number, gap: number) {
  const columns: [Artwork[], Artwork[], Artwork[]] = [[], [], []]
  // Tracks height of each column
  const heights = [0, 0, 0]

  for (const artwork of items) {
    // Grab index of the currently shortest column
    const shortest = heights.indexOf(Math.min(...heights))

    // Include vert gap btwn artworks, but only when there exists an artwork in the column
    if (columns[shortest].length > 0) {
      heights[shortest] += gap
    }

    columns[shortest].push(artwork)

    // Calculate the image's height when scaled down (or up) to the column's width
    heights[shortest] += columnWidth * (artwork.imageHeight / artwork.imageWidth)
  }

  return columns
}

/**
 * // Gallery structure:
 * 
 * <main>
 *   // Column 1
 *   <div>
 *     <figure>...</figure>
 *     <figure>...</figure>
 *     ...
 *   </div>
 * 
 *   // Column 2
 *   <div>
 *     <figure>...</figure>
 *     <figure>...</figure>
 *     ...
 *   </div>
 * 
 *   // Column 3
 *   <div>
 *     <figure>...</figure>
 *     <figure>...</figure>
 *     ...
 *   </div>
 * </main>
 * 
 * With our current setup, Gallery() runs twice:
 *   - First render: 'columns' contains [[], [], []], and React creates 3 empty column
 *     elements. Then it measures the column width and gap, calculates artwork arrangements,
 *     and finally calls setColumns().
 *   - Second render: Calling this setter function causes React to run Gallery() again.
 */
function Gallery() {
  const galleryRef = useRef<HTMLElement>(null)

  /**
   * Here, useState tells React to remember this value between renders.
   * If we used a normal variable instead, e.g. const gallery = window.innerWidth * 0.72,
   * then the next time Gallery() renders, it would recalculate and set the gallery to
   * 72% of the window's updated width.
   */
  const [galleryWidth] = useState(() => window.innerWidth * 0.72)

  /**
   * Each of the 3 columns of the gallery is represented as a list of Artwork objects.
   * Here, useState means we must update 'columns' by providing a new array via the setter.
   * This will give React both the new data and the instruction to update the displayed gallery.
   */
  const [columns, setColumns] = useState<[Artwork[], Artwork[], Artwork[]]>([[], [], []])

  /**
   * Here, useLayoutEffect allows React to calculate the column width and gap before
   * anything is displayed on the page. This allows the gallery itself to be displayed
   * on the page only after all artworks have been placed in the gallery's columns,
   * and prevents an empty gallery (with empty columns) from being displayed before
   * React is able to calculate and place artworks into their columns.
   */
  useLayoutEffect(() => {
    const column = galleryRef.current?.firstElementChild
    if (!column) return

    const columnWidth = column.getBoundingClientRect().width
    // Gets the vertical spacing between artworks, using parseFloat to extract e.g. '15' from '15px'
    const gap = parseFloat(getComputedStyle(column).rowGap) || 0

    setColumns(distributeArtworks(artworks, columnWidth, gap))
  }, [])

  return (
    <main
      ref={galleryRef}
      aria-label="Artwork gallery"
      className="grid grid-cols-3 mx-auto gap-4"
      style={{ width: galleryWidth }}
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
                className="w-full transition-[filter] duration-400 group-hover:brightness-50"
                width={artwork.imageWidth}
                height={artwork.imageHeight}
              />

              <span
                className="
                  absolute bottom-10 right-10 text-white opacity-0 text-[1.35rem]
                  font-light transition-opacity duration-400 group-hover:opacity-100
                  after:block after:h-px after:bg-current after:scale-x-0
                  after:transition-transform after:duration-300 hover:after:scale-x-98
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
