import { useState } from "react";

import Header from "./Header";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if(!passwordRegex.test(value)) {
      setError("Password must contain at least 8 characters, including at least 1 uppercase letter, 1 lowercase letter, and 1 number.");
      } else {
        setError("");
      }
    };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Header flag='2' />
      <div className="w-full max-w-sm bg-gray-100 p-6 rounded-lg shadow-md">
        <form className="space-y-4">
          <div className="flex flex-col gap-1.5 text-left">
            <label className="block text-gray-700 font-medium">Username</label>
            <input 
              type="username"
              placeholder="Username"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
            />
          </div>
          <div className="flex flex-col gap-1.5 text-left">
            <label className="block text-gray-700 font-medium">Email</label>
            <input 
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
            />
          </div>
          <div className="flex flex-col gap-1.5 text-left">
            <label className="block text-gray-700 font-medium">Password</label>
            <input 
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <button 
            type="submit"
            className=" flex flex-col mt-6 w-full bg-black text-white p-3 rounded-lg hover:bg-gray-900"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn
