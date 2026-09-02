import { useEffect, useRef, useState } from 'react'

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
    <div className="pt-20 m-0 text-center">
      <div className="w-[95%] mx-auto">
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          className={`
            flex h-208 overflow-x-scroll snap-x snap-mandatory scroll-smooth rounded-lg
            shadow-lg [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden
            ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
          `}
        >
          {slides.map((slide) => (
            <img
              key={slide.id} 
              id={String(slide.id)} 
              src={slide.src} 
              alt={slide.title}
              draggable={false}
              className={`
                flex-[1_0_100%] snap-center object-contain
                pointer-events-none [-webkit-user-drag:none] select-none
              `}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-x-12 p-4">
          {[...Array(slideCount).keys()].map((i) => (
            <a
              key={i}
              href={`#${i}`}
              className={`
                size-4 rounded-[50%] bg-[darkgray] transition-opacity duration-300 ease-[ease]
                ${i === activeIndex ? 'opacity-100' : 'opacity-30'}
              `}
            />
          ))}
        </div>
      </div>

      <div className="p-0 mt-12 mb-16">
        <p
          key={activeIndex}
          className={`
            p-0 m-0 font-['Raleway',sans-serif] font-light
            text-[2rem] italic animate-[fadeIn_500ms_ease]
          `}
        >
          {activeSlide.title}
        </p>
      </div>
    </div>
  )
}

export default Slider
