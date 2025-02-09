import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './components/LogIn';
import { GoogleOAuthProvider } from "@react-oauth/google"

function App() {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signin" element={<LogIn />} />
          <Route path="/verify" element={<LogIn />} />
          <Route path="/main" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App
