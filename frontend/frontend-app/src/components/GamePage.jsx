import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";
import Header from "./Header";
import useCountdownTimer from "./Hooks/useCountdownTimer";
import { formatTime } from "./Utils/GamePageUtils";

const GamePage = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [openAnswer, setOpenAnswer] = useState("");
  const [timeUp, setTimeUp] = useState(false);
  const navigate = useNavigate();

  const quizData = [
    {
      question: "Hope you are ready for the quiz?",
      questionType: "single",
      image: "/coolpng2.jpg",
      options: ["YES", "YEEEEES", "LOL", "NO"],
    },
    {
      question: "Choose multiple options!",
      questionType: "multiple",
      image: "/coolpng.jpg",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    },
    {
      question: "Write your answer below:",
      questionType: "open",
      image: "/coolpng2.jpg",
      options: [],
    },
  ];

  const { question, questionType, image, options } = quizData[questionIndex];
  const { timeLeft } = useCountdownTimer(5);
  useEffect(() => {
    if (timeLeft === 0) {
      setTimeUp(true);
      setTimeout(() => {
        navigate("/result");
      }, 2000);
    }
  }, [timeLeft, navigate]);

  const handleSelect = (option) => {
    if (questionType === "single") {
      setSelectedOptions([option]);
    } else if (questionType === "multiple") {
      setSelectedOptions((prev) =>
        prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
      );
    }
  };

  const handleNext = () => {
    setSelectedOptions([]);
    setOpenAnswer("");
    if (questionIndex < quizData.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/result");
    }
  };

  const canProceed =
    (questionType === "single" && selectedOptions.length > 0) ||
    (questionType === "multiple" && selectedOptions.length > 0) ||
    (questionType === "open" && openAnswer.trim().length > 0);

    if (timeUp) {
      return (
        <div className="flex flex-col w-full h-screen text-black bg-black">
          <Header />
          <main className="flex-1 flex flex-col justify-center items-center bg-gray-100">
            <div className="text-4xl font-bold animate-pulse text-red-500">
              ⏳ Time Up!
            </div>
            <p className="text-lg mt-4 opacity-70">Redirecting to results...</p>
          </main>
        </div>
      );
    }
    

  return (
    <div className="flex flex-col w-full h-screen text-black">
      <Header />

      {/* QUIZ CONTENT */}
      <main className="flex-1 flex flex-col justify-center items-center bg-white p-8">
        {/* Timer and Question Number */}
        <div className="w-full flex justify-between items-center text-gray-700 text-lg px-6">
          <div className="flex items-center space-x-2">
            <Clock size={28} />
            <span>{formatTime(timeLeft)}</span>
          </div>
          <span>
            Question {questionIndex + 1} of {quizData.length}
          </span>
        </div>

        {/* IMAGE + QUESTION */}
        <div className="w-full bg-gray-400 p-6 mt-6 rounded-lg flex items-center">
          <div className="w-1/3 h-40 bg-gray-300 flex items-center justify-center">
            <img src={image} alt="Question" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-2xl font-bold w-2/3 text-center">{question}</h2>
        </div>

        {/* ANSWER OPTIONS */}
        <div className="w-full grid grid-cols-2 gap-6 mt-6">
          {questionType === "single" &&
            options.map((option, index) => (
              <button
                key={index}
                className={`p-6 rounded-lg text-xl font-semibold transition cursor-pointer ${
                  selectedOptions.includes(option) ? "bg-blue-400 text-white" : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            ))}

          {questionType === "multiple" &&
            options.map((option, index) => (
              <button
                key={index}
                className={`p-6 rounded-lg text-xl font-semibold transition cursor-pointer ${
                  selectedOptions.includes(option) ? "bg-blue-400 text-white" : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            ))}

          {questionType === "open" && (
            <input
              type="text"
              className="p-4 min-w-304 border-2 border-gray-300 rounded-lg text-2xl"
              placeholder="Type your answer..."
              value={openAnswer}
              onChange={(e) => setOpenAnswer(e.target.value)}
            />
          )}
        </div>

        {/* NEXT BUTTON */}
        {canProceed && (
          <button
            className="cursor-pointer mt-6 px-20 py-2 bg-blue-500 text-white rounded-lg text-xl font-semibold hover:bg-blue-600 transition"
            onClick={handleNext}
          >
            {questionIndex < quizData.length - 1 ? "Next" : "Finish"}
          </button>
        )}
      </main>
    </div>
  );
};

export default GamePage;
