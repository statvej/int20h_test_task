import ImgPlaceholder from "/ImgPlaceholder.png"

const MainGameCards = () => {
  return (
    <section className="flex flex-col items-center justify-center b-2 border-gray-300 rounded-lg gap-6 bg-gray-100 p-6 shadow-md hover:shadow-xl">
        <img src={ImgPlaceholder} alt="Image Placeholder" className="w-auto h-auto"/>
        <h1 className="text-2xl font-bold text-left">Game Title</h1>
    </section>
  )
}

export default MainGameCards;