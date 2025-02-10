import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../store/Slices/UserSlice";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ImgPlaceholder from "/ImgPlaceholder.png";
import { useEffect } from "react";
import Header from "./Header";

const UserProfile = () => {
  const profile = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleLogout = () => {
    googleLogout();
    dispatch(clearUser());
    navigate("/login");
  };

  useEffect(() => {
    if (!profile.userName) {
      navigate("/login");
    }
  }, [profile, navigate]);

  const user = {
    rating: 1.1,
    badges: Array(5).fill("https://via.placeholder.com/30"),
    gameHistory: [
      { name: "Game 1", description: "Menu description." },
      { name: "Game 2", description: "Menu description." },
      { name: "Game 3", description: "Menu description." },
    ],
    createdGames: Array(9).fill({
      name: "Game",
      image: "https://via.placeholder.com/150",
    }),
  };

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-36">
        {/* Profile Section */}
        <div className="flex items-center justify-around">
          <button
            onClick={handleBack}
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={profile.picture || ImgPlaceholder}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
            <h2 className="text-2xl font-semibold mt-2">{profile.userName}</h2>
            <p className="text-gray-600">⭐ {user.rating}/5</p>
            <div className="flex gap-2 mt-2">
              {user.badges.map((badge, index) => (
                <img
                  key={index}
                  src={profile.picture}
                  alt="Badge"
                  className="w-6 h-6"
                />
              ))}
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* Game History */}
        <div className="mt-6">
          <h3 className="text-lg mr-4 font-semibold">Game History</h3>
          <ul className="mt-2 space-y-2">
            {user.gameHistory.map((game, index) => (
              <li key={index} className="bg-gray-100 p-3 rounded-lg">
                <strong>{game.name}</strong>
                <p className="text-sm text-gray-500">{game.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Created Games */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-center">Created Games</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {user.createdGames.map((game, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={ImgPlaceholder}
                  alt={game.name}
                  className="w-full object-cover h-32"
                />
                <div className="p-2 text-center">
                  <h4 className="text-sm font-semibold">{game.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
