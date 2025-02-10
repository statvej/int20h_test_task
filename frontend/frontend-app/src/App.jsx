import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn";
import Verify from "./components/Verify";
import Main from "./components/Main";
import UserProfile from "./components/UserProfile";
import GameInfo from "./components/GameInfo";
import QuizCreationForm from "./components/CreateQuiz";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary
      fallback={
        <div className="h-screen flex flex-col justify-center items-center text-3xl">
          Something went wrong!
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/info" element={<GameInfo />} />
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/create" element={<QuizCreationForm />} />
          <Route
            path="*"
            element={
              <div className="h-screen flex flex-col justify-center items-center text-3xl">
                404 Error Not Found! Try again.
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
