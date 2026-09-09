export type Artwork = {
  id: number
  title: string | null
  src: string
  alt: string
  description: string | null
  year: number | null
  dimensions: {
    heightCm: number
    widthCm: number
  } | null
  priceCents: number | null
}

/**
 * Artwork catalog
 */
export const artworks: Artwork[] = [
  {
    id: 1,
    title: 'Untitled 1',
    src: 'https://loajnqpx6dxzio6m.public.blob.vercel-storage.com/c1.webp',
    alt: '',
    description: null,
    year: null,
    dimensions: null,
    priceCents: null
  },
  {
    id: 2,
    title: 'Untitled 2',
    src: 'https://loajnqpx6dxzio6m.public.blob.vercel-storage.com/c2.webp',
    alt: '',
    description: null,
    year: null,
    dimensions: null,
    priceCents: null
  },
  {
    id: 3,
    title: 'Untitled 3',
    src: 'https://loajnqpx6dxzio6m.public.blob.vercel-storage.com/c3.webp',
    alt: '',
    description: null,
    year: null,
    dimensions: null,
    priceCents: null
  },
  {
    id: 4,
    title: 'Untitled 4',
    src: 'https://loajnqpx6dxzio6m.public.blob.vercel-storage.com/c4.webp',
    alt: '',
    description: null,
    year: null,
    dimensions: null,
    priceCents: null
  },
  {
    id: 5,
    title: 'Untitled 5',
    src: 'https://loajnqpx6dxzio6m.public.blob.vercel-storage.com/c5.webp',
    alt: '',
    description: null,
    year: null,
    dimensions: null,
    priceCents: null
  },
  {
    id: 6,
    title: 'Untitled 6',
    src: 'https://loajnqpx6dxzio6m.public.blob.vercel-storage.com/c6.webp',
    alt: '',
    description: null,
    year: null,
    dimensions: null,
    priceCents: null
  },
  {
    id: 7,
    title: 'Untitled 7',
    src: 'https://loajnqpx6dxzio6m.public.blob.vercel-storage.com/c7.webp',
    alt: '',
    description: null,
    year: null,
    dimensions: null,
    priceCents: null
  },
  {
    id: 8,
    title: 'Untitled 8',
    src: 'https://loajnqpx6dxzio6m.public.blob.vercel-storage.com/c8.webp',
    alt: '',
    description: null,
    year: null,
    dimensions: null,
    priceCents: null
  },
  {
    id: 9,
    title: 'Untitled 9',
    src: 'https://loajnqpx6dxzio6m.public.blob.vercel-storage.com/c9.webp',
    alt: '',
    description: null,
    year: null,
    dimensions: null,
    priceCents: null
  },
]

export const sliderArtworkIds: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9
]
