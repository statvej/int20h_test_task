import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
import { CircleFadingPlus, UserRound } from "lucide-react";

const Header = (props) => {
  if (props.flag === '0') {
    return (
      <header className="fixed top-0 left-0 flex w-full h-16 justify-between items-center bg-gray-900 shadow-md px-4"> 
        <div className="flex items-center">
          <Link to="/login" className="hover:cursor-pointer" >
            <h1 className="text-white font-bold text-2xl mr-4">QuizQuizQuiz</h1>
          </Link>
        </div>
  
        <div className="flex items-center">
          <Link to="/signin" className="hover:cursor-pointer" > 
            <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white rounded-md px-4 py-2">
              <CircleFadingPlus className="text-white h-6 w-6 mr-2" />
              Sign Up
            </button>
          </Link>
        </div>
      </header>
    );  
  } else if (props.flag === '2') {
    return (
    <header className="fixed top-0 left-0 flex w-full h-16 justify-between items-center bg-gray-900 shadow-md px-4"> 
      <div className="flex items-center">
        <Link to="/login" className="hover:cursor-pointer" >
            <h1 className="text-white font-bold text-2xl mr-4">QuizQuizQuiz</h1>
        </Link>
      </div>

      <div className="flex items-center">
        <Link to="/login" className="hover:cursor-pointer" > 
          <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white rounded-md px-4 py-2">
            <CircleFadingPlus className="text-white h-6 w-6 mr-2" />
            Sign in
          </button>
        </Link>
      </div>
    </header>
    );
  } else {
    return (
    <header className="fixed top-0 left-0 flex w-full h-16 justify-between items-center bg-gray-900 shadow-md px-4"> 
      <div className="flex items-center">
        <h1 className="text-white font-bold text-2xl mr-4">QuizQuizQuiz</h1> 
      </div>

      <div className="flex items-center"> 
        <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white rounded-md px-4 py-2">
          <CircleFadingPlus className="text-white h-6 w-6 mr-2" />
          Create Your Own Quiz
        </button>
        <button className="cursor-pointer ml-auto"> {/* Added ml-auto to push the button to the right */}
          <UserRound className="text-white h-8 w-8" />
        </button>
      </div>
    </header>
  );
}
};

export default Header;