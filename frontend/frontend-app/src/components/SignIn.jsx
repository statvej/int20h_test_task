import { useState } from "react";
import usePasswordError from "./Hooks/usePasswordError";
import Header from "./Header";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isTouched, setIsTouched] = useState({ username: false, email: false, password: false });

  const error = usePasswordError(password);
  
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const isUsernameInvalid = isTouched.username && !usernameRegex.test(username);
  const isEmailInvalid = isTouched.email && !emailRegex.test(email);
  const isPasswordInvalid = isTouched.password && !passwordRegex.test(password);

  const isFormValid = !isUsernameInvalid && !isEmailInvalid && !isPasswordInvalid && username && email && password;

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Header flag="2" />
      <div className="mt-20 w-full max-w-sm bg-gray-100 p-6 rounded-lg shadow-md">
        <form className="space-y-4">
         <div className="flex flex-col gap-1.5 text-left">
            <label className="block text-gray-700 font-medium">Username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={() => setIsTouched({ ...isTouched, username: true })}
              className={`w-full p-3 border rounded-lg bg-gray-100 transition ${
                isUsernameInvalid ? "border-red-500" : "border-gray-300"
              }`}
            />
            {isUsernameInvalid && <p className="text-red-500 text-sm">Username must be 3-20 characters and can contain letters, numbers, or underscores.</p>}
          </div>

         <div className="flex flex-col gap-1.5 text-left">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setIsTouched({ ...isTouched, email: true })}
              className={`w-full p-3 border rounded-lg bg-gray-100 transition ${
                isEmailInvalid ? "border-red-500" : "border-gray-300"
              }`}
            />
            {isEmailInvalid && <p className="text-red-500 text-sm">Invalid email format.</p>}
          </div>

         <div className="flex flex-col gap-1.5 text-left">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={() => setIsTouched({ ...isTouched, password: true })}
              className={`w-full p-3 border rounded-lg bg-gray-100 transition ${
                isPasswordInvalid ? "border-red-500" : "border-gray-300"
              }`}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

         <Link to={isFormValid ? "/verify" : "#"} className="hover:cursor-pointer">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`flex flex-col mt-6 w-full p-3 rounded-lg transition ${
                isFormValid ? "bg-black text-white hover:bg-gray-900" : "bg-gray-400 text-gray-600 cursor-not-allowed"
              }`}
            >
              Register
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
