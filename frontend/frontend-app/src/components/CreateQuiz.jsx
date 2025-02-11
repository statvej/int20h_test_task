import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import Header from "./Header";
import {
  addQuestion,
  deleteQuestion,
  updateQuestion,
  addAnswer,
  deleteAnswer,
  updateAnswer,
  toggleCorrectAnswer,
  updateCorrectTextAnswer,
  setTestTimer,
} from "../store/Slices/QuizSlice";

const QuizCreationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const questions = useSelector((state) => state.quiz.questions);
  const testTimer = useSelector((state) => state.quiz.testTimer);

  const handleSubmit = () => {
    console.log(questions);
    console.log(testTimer);
    navigate("/");
  };

  const handlePaste = (e, qIndex) => {
    e.preventDefault();
    const items = e.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf("image") !== -1) {
        const blob = items[i].getAsFile();
        const reader = new FileReader();
        reader.onloadend = () => {
          dispatch(updateQuestion({ index: qIndex, field: "image", value: reader.result }));
        };
        reader.readAsDataURL(blob);
      }
    }
  };

  const handleTestTimerChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      dispatch(setTestTimer(value));
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto p-6 mt-32 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold border-b pb-4">Create a Quiz</h2>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Set Timer (in minutes)
          </label>
          <input
            type="text"
            value={testTimer}
            onChange={handleTestTimerChange}
            placeholder="Enter test duration in minutes"
            className="w-full p-2 border rounded"
          />
        </div>

        {questions.map((question, qIndex) => (
          <div key={qIndex} className="mt-4 p-4 border rounded-lg">
            <div onPaste={(e) => handlePaste(e, qIndex)} className="relative">
              <input
                type="text"
                placeholder="Enter question... or/and paste an image"
                value={question.text}
                onChange={(e) =>
                  dispatch(updateQuestion({ index: qIndex, field: "text", value: e.target.value }))
                }
                className="w-full p-2 border rounded"
              />
              {question.image && (
                <img src={question.image} alt="Pasted" className="mt-2 max-w-full max-h-40 object-contain" />
              )}
            </div>

            <select
              value={question.type}
              onChange={(e) => dispatch(updateQuestion({ index: qIndex, field: "type", value: e.target.value }))}
              className="mt-2 w-full p-2 border rounded cursor-pointer"
            >
              <option value="single">Single Choice</option>
              <option value="multiple">Multiple Choice</option>
              <option value="text">Text Input</option>
            </select>

            {question.type === "text" ? (
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700">Correct Answer</label>
                <input
                  type="text"
                  value={question.correct}
                  onChange={(e) => dispatch(updateCorrectTextAnswer({ qIndex: qIndex, value: e.target.value }))}
                  className="w-full p-2 border rounded"
                  placeholder="Enter correct answer..."
                />
              </div>
            ) : (
              <div className="mt-2 space-y-2">
                {question.answers.map((answer, aIndex) => (
                  <div key={aIndex} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={question.correct.includes(aIndex)}
                      onChange={() => dispatch(toggleCorrectAnswer({ qIndex, aIndex }))}
                    />
                    <input
                      type="text"
                      value={answer}
                      placeholder="Enter answer..."
                      onChange={(e) => dispatch(updateAnswer({ qIndex, aIndex, value: e.target.value }))}
                      className="w-full p-2 border rounded"
                    />
                    <button
                      onClick={() => dispatch(deleteAnswer({ qIndex, aIndex }))}
                      className="hover:bg-gray-200 px-2 py-1 text-red-600 rounded cursor-pointer"
                    >
                      <X />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => dispatch(addAnswer({ qIndex }))}
                  className="mt-2 px-4 py-2 hover:shadow-lg bg-blue-500 text-white rounded cursor-pointer"
                >
                  Add Answer
                </button>
              </div>
            )}

            <button
              onClick={() => dispatch(deleteQuestion(qIndex))}
              className="mt-4 hover:shadow-lg px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
            >
              Delete Question
            </button>
          </div>
        ))}
        <div className="flex flex-col items-center gap-5">
          <button
            onClick={() => dispatch(addQuestion())}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
          >
            Add Question
          </button>
          <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCreationForm;