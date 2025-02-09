import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!user.userName) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div>
        <Header/>
        <div className="flex justify-center items-center mt-48">
        <div className="flex flex-col box-border w-96 gap-6 bg-gray-100 shadow-md rounded-2xl items-center border border-gray-100 p-6">
            <h2 className="text-center text-2xl font-light">Search for games</h2>
            <div className="relative flex items-center w-64 border-2 border-gray-300 rounded-full px-4 py-2">
            <input
                type="text"
                className="flex-grow outline-none bg-transparent"
                placeholder="Search for quizes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
                <button onClick={() => setSearchTerm("")}>
                <X className="h-5 w-5 text-gray-500" />
                </button>
            )}
            </div>

            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg text-lg cursor-pointer">
            Search
            </button>
        </div>
        </div>
    </div>
  );
};

export default Main;
