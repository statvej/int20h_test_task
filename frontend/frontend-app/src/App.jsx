import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './components/LogIn';
import SignIn from './components/SignIn';
import Verify from './components/Verify';
import Main from './components/Main';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
