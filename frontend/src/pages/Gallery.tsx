import { useEffect, useLayoutEffect, useRef, useState } from 'react'
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
 * Gallery initially renders three empty columns so useLayoutEffect can measure
 * their width and gap.
 * 
 * Calling setColumns() triggers another render, placing correctly sized artwork
 * placeholders into those columns.
 * 
 * Later, setSeenArtworkIds() triggers additional renders as artworks enter the
 * viewport. These renders add the corresponding image elements, allowing their
 * images to begin loading.
 */
function Gallery() {
  const galleryRef = useRef<HTMLElement>(null)

  /**
   * Here, useState tells React to remember this value between renders.
   * If we used a normal variable instead, e.g. const gallery = window.innerWidth * 0.65,
   * then the next time Gallery() renders, it would recalculate and set the gallery to
   * 65% of the window's updated width.
   */
  const [galleryWidth] = useState(() => window.innerWidth * 0.65)

  /**
   * Each of the 3 columns of the gallery is represented as a list of Artwork objects.
   * Here, useState means we must update 'columns' by providing a new array via the setter.
   * This will give React both the new data and the instruction to update the displayed gallery.
   */
  const [columns, setColumns] = useState<[Artwork[], Artwork[], Artwork[]]>([[], [], []])

  /**
   * This is a set that remembers which artworks have entered the viewport.
   */
  const [seenArtworkIds, setSeenArtworkIds] = useState<Set<number>>(() => new Set())

  /**
   * Here, useLayoutEffect measures the column width and gap, then arranges the artwork
   * placeholders before the browser paints the gallery. This allows the gallery itself
   * to be displayed on the page only after all artworks have been reserved spots in the
   * gallery's columns, which prevents an empty gallery (with empty columns) from being
   * displayed before React is able to calculate and place artworks into their columns.
   */
  useLayoutEffect(() => {
    const column = galleryRef.current?.firstElementChild
    if (!column) return

    const columnWidth = column.getBoundingClientRect().width
    // Gets the vertical spacing between artworks, using parseFloat to extract e.g. '15' from '15px'
    const gap = parseFloat(getComputedStyle(column).rowGap) || 0

    setColumns(distributeArtworks(artworks, columnWidth, gap))
  }, [])

  useEffect(() => {
    const figures = galleryRef.current?.querySelectorAll('figure[data-artwork-id]')
    if (!figures || figures.length === 0) return

    const visibilityThreshold = 0.1

    const observer = new IntersectionObserver(
      (entries, observer) => {
        const ids: number[] = []

        for (const entry of entries) {
          // Skip artworks that haven't reached the visibility threshold
          if (entry.intersectionRatio < visibilityThreshold) continue

          ids.push(Number(entry.target.getAttribute('data-artwork-id')))

          // Once seen, this artwork no longer needs observing
          observer.unobserve(entry.target)
        }

        if (ids.length > 0) {
          setSeenArtworkIds(previous => new Set([...previous, ...ids]))
        }
      },
      { threshold: visibilityThreshold }
    )

    figures.forEach(figure => observer.observe(figure))

    return () => observer.disconnect()
  }, [columns])  // Run this after the column arrangement creates the figures

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
          className="flex flex-col gap-5"
        >
          {column.map(artwork => (
            <figure
              key={artwork.id}
              data-artwork-id={artwork.id}
              className="group relative cursor-pointer"
              style={{ aspectRatio: `${artwork.imageWidth} / ${artwork.imageHeight}` }}
            >
              {seenArtworkIds.has(artwork.id) && (
                <img
                  src={artwork.src}
                  alt={artwork.alt}
                  decoding="async"
                  className="page-fade-in w-full transition-[filter] duration-300 group-hover:brightness-50"
                  width={artwork.imageWidth}
                  height={artwork.imageHeight}
                />
              )}

              <span
                className="
                  absolute bottom-10 right-10 text-white opacity-0 text-[1.35rem]
                  font-light transition-opacity duration-300 group-hover:opacity-100
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
