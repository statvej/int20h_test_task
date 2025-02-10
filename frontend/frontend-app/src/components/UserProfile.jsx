import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../store/Slices/UserSlice";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from 'lucide-react'; 
import ImgPlaceholder from "/ImgPlaceholder.png";
import { useEffect } from "react";

const UserProfile = () => {
  const profile = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page in history
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
    createdGames: [
      { name: "Game 1", image: "https://via.placeholder.com/150" },
      { name: "Game 2", image: "https://via.placeholder.com/150" },
      { name: "Game 3", image: "https://via.placeholder.com/150" },
      { name: "Game 4", image: "https://via.placeholder.com/150" },
      { name: "Game 4", image: "https://via.placeholder.com/150" },
      { name: "Game 4", image: "https://via.placeholder.com/150" },
      { name: "Game 4", image: "https://via.placeholder.com/150" },
      { name: "Game 4", image: "https://via.placeholder.com/150" },
      { name: "Game 4", image: "https://via.placeholder.com/150" },
    ],
  };

  return (
    <div className="relative max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Logout Button */}
      <button 
        onClick={handleBack} 
        className="absolute top-1 cursor-pointer left-1 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
      >
        <ArrowLeft size={20} /> 
      </button>
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
      >
        Logout
      </button>

      {/* Profile Section */}
      <div className="flex items-center gap-4 border-b pb-4">
        <img
          src={profile.picture}
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />
        <div>
          <h2 className="text-2xl font-semibold">{profile.userName}</h2>
          <p className="text-gray-600 text-left">⭐ {user.rating}/5</p>
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
      </div>

      {/* Game History */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Game History</h3>
        <ul className="mt-2 space-y-2">
          {user.gameHistory.map((game, index) => (
            <li key={index} className="bg-gray-100 p-2 rounded-lg">
              <strong>{game.name}</strong>
              <p className="text-sm text-gray-500">{game.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Created Games */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-center">Created Games</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {user.createdGames.map((game, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={ImgPlaceholder}
                alt={game.name}
                className="w-full object-cover h-40"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold">{game.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
