import { Link } from "react-router-dom";

const GameResult = () => {
  const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
      userAnswer: "Berlin",
    },
    {
      question: "2 + 2 = ?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
      userAnswer: "4",
    },
    {
      question: "Who developed the theory of relativity?",
      options: ["Newton", "Einstein", "Tesla", "Galileo"],
      correctAnswer: "Einstein",
      userAnswer: "Tesla",
    },
  ];

  const correctCount = quizData.filter(q => q.correctAnswer === q.userAnswer).length;

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Quiz Results</h1>
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
        {quizData.map((q, index) => (
          <div key={index} className="mb-4 p-4 border rounded-lg bg-gray-50">
            <h2 className="font-semibold text-lg">{q.question}</h2>
            <p
              className={
                q.userAnswer === q.correctAnswer
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              Your Answer: {q.userAnswer}
            </p>
            <p className="text-gray-800">Correct Answer: {q.correctAnswer}</p>
          </div>
        ))}
        <h2 className="text-xl font-bold mt-4">Score: {correctCount} / {quizData.length}</h2>
        <div className="flex justify-between mt-6">
          <Link to="/game" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Try Again
          </Link>
          <Link to="/" className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
              Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameResult;
