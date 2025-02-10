import { useState } from "react";
import Header from "./Header";
import { X } from "lucide-react";

const QuizCreationForm = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    if(questions.length >= 10) return;
    setQuestions([
      ...questions,
      { type: "single", text: "", answers: [""], correct: [], image: "" },
    ]);
  };

  const deleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, qIndex) => qIndex !== index);
    setQuestions(updatedQuestions);
  };

  const updateQuestion = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const addAnswer = (qIndex) => {
    if(questions[qIndex].answers.length >= 4) return;
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].answers.push("");
    setQuestions(updatedQuestions);
  };

  const deleteAnswer = (qIndex, aIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].answers = updatedQuestions[qIndex].answers.filter(
      (_, index) => index !== aIndex
    );
    setQuestions(updatedQuestions);
  };

  const updateAnswer = (qIndex, aIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].answers[aIndex] = value;
    setQuestions(updatedQuestions);
  };

  const toggleCorrectAnswer = (qIndex, aIndex) => {
    const updatedQuestions = [...questions];

    if (updatedQuestions[qIndex].type === "single") {
      updatedQuestions[qIndex].correct = [aIndex];
    } else {
      const correct = new Set(updatedQuestions[qIndex].correct);
      if (correct.has(aIndex)) correct.delete(aIndex);
      else correct.add(aIndex);
      updatedQuestions[qIndex].correct = Array.from(correct);
    }

    setQuestions(updatedQuestions);
  };

  const updateCorrectTextAnswer = (qIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].correct = value; // Store correct answer as a string
    setQuestions(updatedQuestions);
  };

  const handlePaste = (e, qIndex) => {
    // Prevent the default paste behavior
    e.preventDefault();

    // Get the pasted data
    const items = e.clipboardData.items;

    // Check if there is an image in the clipboard
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf("image") !== -1) {
        const blob = items[i].getAsFile();
        const reader = new FileReader();

        reader.onloadend = () => {
          // Set the image as the question image
          const updatedQuestions = [...questions];
          updatedQuestions[qIndex].image = reader.result; // Store the image data as a base64 string
          setQuestions(updatedQuestions);
        };

        reader.readAsDataURL(blob); // Convert image to base64
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto p-6 mt-32 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold border-b pb-4">Create a Quiz</h2>
        {questions.map((question, qIndex) => (
          <div key={qIndex} className="mt-4 p-4 border rounded-lg">
            <div
              onPaste={(e) => handlePaste(e, qIndex)} // Attach paste handler here
              className="relative"
            >
              <input
                type="text"
                placeholder="Enter question... or/and paste an image"
                value={question.text}
                onChange={(e) => updateQuestion(qIndex, "text", e.target.value)}
                className="w-full p-2 border rounded"
              />
              {question.image && (
                <img
                  src={question.image}
                  alt="Pasted"
                  className="mt-2 max-w-full max-h-40 object-contain"
                />
              )}
            </div>

            <select
              value={question.type}
              onChange={(e) => updateQuestion(qIndex, "type", e.target.value)}
              className="mt-2 w-full p-2 border rounded"
            >
              <option value="single">Single Choice</option>
              <option value="multiple">Multiple Choice</option>
              <option value="text">Text Input</option>
            </select>
            {question.type === "text" && (
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700">
                  Correct Answer
                </label>
                <input
                  type="text"
                  value={question.correct}
                  onChange={(e) =>
                    updateCorrectTextAnswer(qIndex, e.target.value)
                  }
                  className="w-full p-2 border rounded"
                  placeholder="Enter correct answer..."
                />
              </div>
            )}
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
                      onChange={(e) =>
                        updateAnswer(qIndex, aIndex, e.target.value)
                      }
                      className="w-full p-2 border rounded"
                    />
                    <button
                      onClick={() => deleteAnswer(qIndex, aIndex)}
                      className="hover:bg-gray-200 px-2 py-1  text-red-600 rounded"
                    >
                      <X />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => addAnswer(qIndex)}
                  className="mt-2 px-4 py-2 hover:shadow-lg bg-blue-500 text-white rounded"
                >
                  Add Answer
                </button>
              </div>
            )}

            <button
              onClick={() => deleteQuestion(qIndex)}
              className="mt-4 hover:shadow-lg px-4 py-2 bg-red-500 text-white rounded"
            >
              Delete Question
            </button>
          </div>
        ))}

        <button
          onClick={addQuestion}
          className="hover:shadow-lg mt-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          Add Question
        </button>
      </div>
    </div>
  );
};

export default QuizCreationForm;
