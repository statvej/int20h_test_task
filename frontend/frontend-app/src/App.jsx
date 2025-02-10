import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './components/LogIn';
import SignIn from './components/SignIn';
import Verify from './components/Verify';
import Main from './components/Main';
import GameInfo from './components/GameInfo';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/info" element={<GameInfo />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
