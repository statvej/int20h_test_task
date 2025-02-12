import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";
import quizReducer from "./Slices/QuizSlice";
import signinReducer from "./Slices/SignInSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        quiz: quizReducer,
        signin: signinReducer,
    },
});