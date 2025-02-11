import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";
import quizReducer from "./Slices/QuizSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        quiz: quizReducer,
    },
});