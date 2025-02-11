import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  testTimer: "",
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setTestTimer: (state, action) => {
      state.testTimer = action.payload;
    },
    addQuestion: (state) => {
      if (state.questions.length >= 10) return;
      state.questions.push({
        type: "single",
        text: "",
        answers: [""],
        correct: [],
        image: "",
        timer: 0,
      });
    },
    deleteQuestion: (state, action) => {
      state.questions = state.questions.filter((_, index) => index !== action.payload);
    },
    updateQuestion: (state, action) => {
      const { index, field, value } = action.payload;
      state.questions[index][field] = value;
    },
    addAnswer: (state, action) => {
        if (state.questions[action.payload.qIndex].answers.length >= 4) return;
        const { qIndex } = action.payload;
        state.questions[qIndex].answers.push(""); // Add an empty answer string
      },
      
    deleteAnswer: (state, action) => {
      const { qIndex, aIndex } = action.payload;
      state.questions[qIndex].answers = state.questions[qIndex].answers.filter((_, index) => index !== aIndex);
    },
    updateAnswer: (state, action) => {
      const { qIndex, aIndex, value } = action.payload;
      state.questions[qIndex].answers[aIndex] = value;
    },
    toggleCorrectAnswer: (state, action) => {
        const { qIndex, aIndex } = action.payload;
        const question = state.questions[qIndex];
      
        if (question.type === "single") {
          question.correct = [aIndex]; // Ensure only one is selected
        } else if (question.type === "multiple") {
          if (!question.correct) question.correct = []; // Initialize if undefined
          const correct = new Set(question.correct);
          correct.has(aIndex) ? correct.delete(aIndex) : correct.add(aIndex);
          question.correct = Array.from(correct);
        }
      },
      
    updateCorrectTextAnswer: (state, action) => {
        const { qIndex, value } = action.payload;
        state.questions[qIndex].correct = state.questions[qIndex].type === "text" ? value : [];
      },      
    updateQuestionImage: (state, action) => {
      const { qIndex, image } = action.payload;
      state.questions[qIndex].image = image;
    },
  },
});

export const {
  setTestTimer,
  addQuestion,
  deleteQuestion,
  updateQuestion,
  addAnswer,
  deleteAnswer,
  updateAnswer,
  toggleCorrectAnswer,
  updateCorrectTextAnswer,
  updateQuestionImage,
} = quizSlice.actions;

export default quizSlice.reducer;
