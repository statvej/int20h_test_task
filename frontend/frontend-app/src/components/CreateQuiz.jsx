import { useState } from "react";
import Header from "./Header";

const QuizCreationForm = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions([...questions, { type: "single", text: "", answers: [""], correct: [] }]);
  };

  const updateQuestion = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const updateAnswer = (qIndex, aIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].answers[aIndex] = value;
    setQuestions(updatedQuestions);
  };

  const toggleCorrectAnswer = (qIndex, aIndex) => {
    const updatedQuestions = [...questions];
    const correct = new Set(updatedQuestions[qIndex].correct);
    if (correct.has(aIndex)) correct.delete(aIndex);
    else correct.add(aIndex);
    updatedQuestions[qIndex].correct = Array.from(correct);
    setQuestions(updatedQuestions);
  };

  return (
    <div>
        <Header flag='1' />
        <div className="max-w-4xl mx-auto p-6 mt-32 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold border-b pb-4">Create a Quiz</h2>
        {questions.map((question, qIndex) => (
            <div key={qIndex} className="mt-4 p-4 border rounded-lg">
            <input
                type="text"
                placeholder="Enter question..."
                value={question.text}
                onChange={(e) => updateQuestion(qIndex, "text", e.target.value)}
                className="w-full p-2 border rounded"
            />

            <select
                value={question.type}
                onChange={(e) => updateQuestion(qIndex, "type", e.target.value)}
                className="mt-2 w-full p-2 border rounded"
            >
                <option value="single">Single Choice</option>
                <option value="multiple">Multiple Choice</option>
                <option value="text">Text Input</option>
            </select>

            {question.type !== "text" && (
                <div className="mt-2 space-y-2">
                {question.answers.map((answer, aIndex) => (
                    <div key={aIndex} className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={question.correct.includes(aIndex)}
                        onChange={() => toggleCorrectAnswer(qIndex, aIndex)}
                    />
                    <input
                        type="text"
                        value={answer}
                        placeholder="Enter answer..."
                        onChange={(e) => updateAnswer(qIndex, aIndex, e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    </div>
                ))}
                <button
                    onClick={() => updateQuestion(qIndex, "answers", [...question.answers, ""])}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Add Answer
                </button>
                </div>
            )}
            </div>
        ))}

        <button onClick={addQuestion} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
            Add Question
        </button>
        </div>
    </div>
  );
};

export default QuizCreationForm;
