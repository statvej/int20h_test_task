import ImgPlaceholder from "/ImgPlaceholder.png"
import { Link } from "react-router-dom";

const MainGameCards = () => {
  return (
    <Link to="/info">
      <section className="flex flex-col items-center justify-center b-2 border-gray-300 rounded-lg gap-6 bg-gray-100 p-6 shadow-md hover:shadow-xl cursor-pointer">
          <img src={ImgPlaceholder} alt="Image Placeholder" className="w-auto h-auto"/>
          <h1 className="text-2xl font-bold text-left">Game Title</h1>
      </section>
    </Link>
  )
}

export default MainGameCards;