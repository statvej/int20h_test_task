import { CircleFadingPlus, UserRound } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 flex w-full h-16 justify-around items-center bg-gray-900 shadow-md px-4">
        <div className="text-white">QuizQuizQuiz</div>
        <div className="flex items-center space-x-8"> {/* space between buttons */}
            <div className="flex items-center justify-between">
                <div className="text-white mr-2">Create your own quiz</div>
                <button className="cursor-pointer">
                    <CircleFadingPlus className="text-white h-10 w-10" />
                </button>
            </div>
                <button className="cursor-pointer">
                    <UserRound className="text-white h-10 w-10" />
                </button>   
        </div>
    </header>
  )
}

export default Header;
