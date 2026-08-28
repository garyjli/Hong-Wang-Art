import Slider from '../components/Slider'

const slides = [
  {
    id: 0,
    src: 'images/a1.jpeg',
    title: '',
  },
  {
    id: 1,
    src: 'images/a2.jpeg',
    title: 'Journey of Courage',
  },
  {
    id: 2,
    src: 'images/a3.jpeg',
    title: '',
  },
  {
    id: 3,
    src: 'images/a4.jpeg',
    title: '',
  },
  {
    id: 4,
    src: 'images/a5.jpeg',
    title: '',
  },
  {
    id: 5,
    src: 'images/a6.jpeg',
    title: '',
  },
  {
    id: 6,
    src: 'images/a7.jpeg',
    title: '',
  },
  {
    id: 7,
    src: 'images/a8.jpeg',
    title: '',
  },
  {
    id: 8,
    src: 'images/a9.jpeg',
    title: '',
  },
]

function Home() {
  return (
    <main>
      <Slider slides={slides} />
    </main>
  )
}

export default Home
