import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
import { CircleFadingPlus, UserRound } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log(props.userPic);
  if (props.flag === '0') {
    return (
      <header className="fixed top-0 left-0 flex w-full h-16 justify-between items-center bg-gray-900 shadow-md px-4"> 
        <div className="flex items-center">
          <Link to="/" className="cursor-pointer">
            <h1 className="text-white font-bold text-2xl mr-4">QuizQuizQuiz</h1>
          </Link>
        </div>
  
        <div className="flex items-center">
          <Link to="/signin" className="cursor-pointer" > 
            <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white rounded-md px-4 py-2">
              <CircleFadingPlus className="text-white h-6 w-6 mr-2"/>
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
        <Link to="/" className="cursor-pointer" >
            <h1 className="text-white font-bold text-2xl mr-4">QuizQuizQuiz</h1>
        </Link>
      </div>

      <div className="flex items-center">
        <Link to="/login" className="cursor-pointer" > 
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
        <Link to="/" className="cursor-pointer" > 
          <h1 className="text-white font-bold text-2xl mr-4">QuizQuizQuiz</h1>
        </Link> 
      </div>

      <div className="flex items-center"> 
        <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white rounded-md px-4 py-2">
          <CircleFadingPlus className="text-white h-6 w-6 mr-2" />
          Create Your Own Quiz
        </button>
        <button onClick={() => navigate('/profile')} className="cursor-pointer ml-auto">
        {!user.picture ? <UserRound className="text-white h-6 w-6 ml-4"/> : <img src={user.picture} alt="User" className="h-6 w-6 ml-4 rounded-full"/>}
        </button>
      </div>
    </header>
  );
}
};

export default Header;