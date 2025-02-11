import { useState } from "react";
import { Clock } from "lucide-react";
import Header from "./Header";

const GamePage = () => {
  const [questionIndex] = useState(0);
  const quizData = [
    {
      question: "Hope you are ready for the quiz?",
      questionType: "single",
      image: "/coolpng2.jpg",
      options: ["YES", "YEEEEES", "LOL", "NO"],
    },
  ];

  const { question, image, options } = quizData[questionIndex];

  return (
    <div className="flex flex-col w-full h-screen text-black">
      {/* HEADER */}
      <Header flag />

      {/* QUIZ CONTENT */}
      <main className="flex-1 flex flex-col justify-center items-center bg-white p-8">
        {/* Timer and Question Number */}
        <div className="w-full flex justify-between items-center text-gray-700 text-lg px-6">
          <div className="flex items-center space-x-2">
            <Clock size={28} />
            <span>2:28</span>
          </div>
          <span>
            Question {questionIndex + 1} of {quizData.length}
          </span>
        </div>

        {/* IMAGE + QUESTION */}
        <div className="w-full bg-gray-400 p-6 mt-6 rounded-lg flex items-center">
          <div className="w-1/3 h-40 bg-gray-300 flex items-center justify-center">
            <img
              src={image}
              alt="Question"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold w-2/3 text-center">{question}</h2>
        </div>

        {/* ANSWER OPTIONS */}
        <div className="w-full grid grid-cols-2 gap-6 mt-6">
          {options.map((option, index) => (
            <button
              key={index}
              className="p-6 bg-gray-200 rounded-lg hover:bg-gray-300 transition text-xl font-semibold cursor-pointer"
            >
              {option}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default GamePage;

// import { useState } from "react";
// import { Clock, PlusCircle } from "lucide-react";
// import Header from "./Header";

// const GamePage = () => {
//     const [questionIndex, setQuestionIndex] = useState(0);
//     const quizData = [
//         {
//             question: "Hope you are ready for the quiz?",
//             image: "./../public/coolpng.jpg",
//             options: ["YES", "YEEEEES", "LOL", "NO"],
//         },
//     ];

//     const { question, image, options } = quizData[questionIndex];

//     return (
//         <div className="flex items-center min-h-screen text-black">
//         {/* <div className="flex justify-center items-center bg-gray-100 min-h-screen"></div> */}
//             <Header flag />
//             {/* QUIZ CONTENT */}
//             <main className="max-w-4xl mx-auto mt-6 bg-white shadow-lg rounded-lg p-6">
//                 {/* Timer and Question Number */}
//                 <div className="flex justify-between items-center text-gray-700">
//                     <div className="flex items-center space-x-2">
//                         <Clock size={24} />
//                         <span className="text-lg">2:28</span>
//                     </div>
//                     <span className="text-sm">Question {questionIndex + 1} of {quizData.length}</span>
//                 </div>

//                 {/* IMAGE + QUESTION */}
//                 <div className="bg-gray-400 p-6 mt-4 rounded-lg flex items-center justify-between">
//                     <div className="w-1/3 h-32 bg-gray-300 flex items-center justify-center">
//                         <img src={image} alt="Question" className="w-80 h-36 object-cover" />
//                     </div>
//                     <h2 className="text-xl font-bold w-2/3">{question}</h2>
//                 </div>

//                 {/* ANSWER OPTIONS */}
//                 <div className="grid grid-cols-2 gap-4 mt-6">
//                     {options.map((option, index) => (
//                         <button
//                             key={index}
//                             className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
//                         >
//                             {option}
//                         </button>
//                     ))}
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default GamePage;
