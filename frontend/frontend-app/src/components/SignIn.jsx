import usePasswordError from "./Hooks/usePasswordError";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setUsername,
  setEmail,
  setIsTouched,
  setPassword,
} from "../store/Slices/SignInSlice";
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.signin);
  const error = usePasswordError(user.password);

  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const isUsernameInvalid =
    user.isTouched.username && !usernameRegex.test(user.username);
  const isEmailInvalid = user.isTouched.email && !emailRegex.test(user.email);
  const isPasswordInvalid =
    user.isTouched.password && !passwordRegex.test(user.password);

  const isFormValid =
    !isUsernameInvalid &&
    !isEmailInvalid &&
    !isPasswordInvalid &&
    user.username &&
    user.email &&
    user.password;

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleRegisterKeyDown = (e) => {
    if (e.key === "Enter") {
      handleRegister(e);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/register",
        {
          username: user.username,
          email: user.email,
          password: user.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      // Check the correct response status
      if (response.status >= 200 && response.status < 300) {
        navigate("/verify");
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Header flag="2" />
      <motion.div
        className="mt-20 w-full max-w-sm bg-gray-100 p-6 rounded-lg shadow-md"
        data-aos="fade-in"
        data-aos-delay={100} // Stagger the animations
        data-aos-duration="1000"
      >
        <form className="space-y-4">
          <div className="flex flex-col gap-1.5 text-left">
            <label className="block text-gray-700 font-medium">Username</label>
            <input
              type="text"
              placeholder="Username"
              value={user.username}
              onChange={(e) => dispatch(setUsername(e.target.value))}
              onBlur={() =>
                dispatch(setIsTouched({ ...user.isTouched, username: true }))
              }
              className={`w-full p-3 border rounded-lg bg-gray-100 transition ${
                isUsernameInvalid ? "border-red-500" : "border-gray-300"
              }`}
            />
            {isUsernameInvalid && (
              <p className="text-red-500 text-sm">
                Username must be 3-20 characters and can contain letters,
                numbers, or underscores.
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              onBlur={() =>
                dispatch(setIsTouched({ ...user.isTouched, email: true }))
              }
              className={`w-full p-3 border rounded-lg bg-gray-100 transition ${
                isEmailInvalid ? "border-red-500" : "border-gray-300"
              }`}
            />
            {isEmailInvalid && (
              <p className="text-red-500 text-sm">Invalid email format.</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={handlePasswordChange}
              onBlur={() =>
                dispatch(setIsTouched({ ...user.isTouched, password: true }))
              }
              className={`w-full p-3 border rounded-lg bg-gray-100 transition ${
                isPasswordInvalid ? "border-red-500" : "border-gray-300"
              }`}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          {/* <Link to={isFormValid ? "/verify" : "#"} className="hover:cursor-pointer"> */}
          <button
            onClick={handleRegister}
            onKeyDown={handleRegisterKeyDown}
            type="submit"
            disabled={!isFormValid}
            className={`flex flex-col mt-6 w-full p-3 rounded-lg transition ${
              isFormValid
                ? "bg-black text-white hover:bg-gray-900"
                : "bg-gray-400 text-gray-600 cursor-not-allowed"
            }`}
          >
            Register
          </button>
          {/* </Link> */}
        </form>
      </motion.div>
    </div>
  );
};

export default SignIn;
