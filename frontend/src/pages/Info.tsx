import Portrait from '../assets/profile.webp'

function Info() {
  return (
    <main>
      {/* Info Container */}
      <div className="w-[70%] grid grid-cols-[30fr_70fr] gap-12 mx-auto">
        {/* Image */}
        <div
          className="
            relative border border-[lightgray] rounded-lg shadow-md overflow-hidden
          "
        >
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={Portrait}
            alt="Artist Portrait"
          />
        </div>

        {/* Text Description */}
        <p
          className="
            border border-[lightgray] font-['Raleway',sans-serif]
            font-light text-[1.5rem] p-8 leading-11 shadow-md rounded-lg
          "
        >
          Standing on the bare ground, -my head bathed by the blithe air and uplifted into 
          infinite space,- all mean egotism vanishes. I become a transparent eye-ball; I am 
          nothing; I see all; the currents of the Universal Being circulate through me; I am 
          part or particle of God.
          <br /><br />
          - Ralph Waldo Emerson, <em>Nature</em> (1836)
          <br /><br />
          I was born in China but I've lived in Marin County for almost 20 years. Becoming an 
          artist has been one of my dreams since I was a child, when I first saw my father sketch 
          a portrait of my mother on a blackboard with chalk. I found his sketch so beautiful and 
          impressive that I wanted to try it myself, but I never had the chance to because of 
          inadequate resources. That was, until two years ago during the pandemic, when I first 
          attempted to sketch in chalk. For the next few months, I continued to practice sketching 
          and later moved on to soft pastel and watercolor painting with the help of a few online 
          courses. Currently, I enjoy painting figures, landscapes, and still life, using a variety 
          of mediums such as chalk, pastel, and watercolor. Outside of art, I love to read, hike, 
          and admire the incredible nostalgic scenery of Marin County that reminds me of where I 
          grew up. I wish to continue expanding my interest in art and discover unique ways to 
          express my love for beautiful sceneries.
        </p>
      </div>

      {/* Awards Container */}
      <div
        className="
          border border-[lightgray] rounded-lg shadow-md
          w-[70%] h-auto mt-12 mx-auto pt-8 pb-10 px-10 text-center
        "
      >
        <h3 className="mb-4 text-[2.8rem] uppercase font-['Raleway',sans-serif] font-light">
          Awards
        </h3>

        <p className="leading-12 font-['Raleway',sans-serif] font-light text-[1.5rem]">
          Marin County Fair Online Show 2022 * First Place Award
          <br />
          Art Show International Gallery Landscape 2022 * Honorable Mention
        </p>
      </div>
    </main>
  )
}

export default Info
