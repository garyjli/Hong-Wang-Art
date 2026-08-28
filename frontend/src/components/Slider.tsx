import { useEffect, useRef, useState } from 'react'
import '../styles/Slider.css'

export type Slide = {
  id: number
  src: string
  title: string
}

type SliderProps = {
  slides: Slide[]
}

function Slider({ slides }: SliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null)

  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const slideCount = slides.length
  const activeSlide = slides[activeIndex] ?? slides[0]

  useEffect(() => {
    const onUp = () => setIsDragging(false)

    window.addEventListener('mouseup', onUp)
    return () => void window.removeEventListener('mouseup', onUp)
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!sliderRef.current) return

    setIsDragging(true)
    const rect = sliderRef.current.getBoundingClientRect()
    setStartX(e.clientX - rect.left)
    setScrollLeft(sliderRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return

    e.preventDefault()
    const rect = sliderRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const walk = (x - startX) * 3
    sliderRef.current.scrollLeft = scrollLeft - walk
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const onScroll = () => {
      const slideWidth = slider.clientWidth
      const idx = Math.round(slider.scrollLeft / slideWidth)

      setActiveIndex(Math.min(Math.max(idx, 0), slideCount - 1))
    }

    slider.addEventListener('scroll', onScroll, { passive: true })
    return () => void slider.removeEventListener('scroll', onScroll)
  }, [slideCount])

  if (slideCount === 0) return null

  return (
    <div className="img-container">
      <div className="slider-wrapper">
        <div
          className="slider"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {slides.map((slide) => (
            <img key={slide.id} id={String(slide.id)} src={slide.src} />
          ))}
        </div>

        <div className="slider-nav">
          {[...Array(slideCount).keys()].map((i) => (
            <a
              key={i}
              href={`#${i}`}
              className={i === activeIndex ? 'dot active' : 'dot'}
            />
          ))}
        </div>
      </div>

      <div className="title">
        <p id="title" key={activeIndex}>
          {activeSlide.title}
        </p>
      </div>
    </div>
  )
}

export default Slider
