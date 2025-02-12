import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../store/Slices/UserSlice";
import Header from "./Header";
import { useState } from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isTouched, setIsTouched] = useState({ email: false, password: false });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Step 1: Authenticate the user using their email and password
      const res = await axios.post(
        "http://localhost:8080/auth/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        console.log("Logged in successfully:", email);
        
        // Step 2: Fetch user data using the provided email
        const userData = await axios.get(`http://localhost:8080/api/users/email/${email}`);

        // Step 4: Dispatch user data to Redux store
        dispatch(
          setUser({
            email: userData.data.email,
            userName: userData.data.username,
            picture: userData.data.profilePicture,
            authMethod: "local",
          })
        );

        // Step 5: Navigate to the homepage or other page
        navigate("/");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Error logging in. Please check your credentials.");
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${codeResponse.access_token}`,
              Accept: "application/json",
            },
          }
        );
        dispatch(
          setUser({
            userName: res.data.name,
            email: res.data.email,
            picture: res.data.picture,
            authMethod: "google",
          })
        );

        navigate("/");
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },
    onError: (error) => console.error("Login Failed:", error),
  });

  // Validation checks
  const isEmailInvalid = isTouched.email && email.trim().length === 0;
  const isPasswordInvalid = isTouched.password && password.trim().length === 0;

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Header flag="0" />
      <motion.div
        className="w-full max-w-sm bg-gray-100 p-6 rounded-lg shadow-md"
        data-aos="fade-in"
        data-aos-delay={100}
        data-aos-duration="1000"
      >
        <form className="space-y-4">
          <div className="flex flex-col gap-3.5 text-left">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setIsTouched({ ...isTouched, email: true })}
              type="email"
              placeholder="Email"
              className={`w-full p-3 border rounded-lg bg-gray-100 transition ${isEmailInvalid ? "border-red-500" : "border-gray-300"}`}
            />
            {isEmailInvalid && <p className="text-red-500 text-sm">Email is required!</p>}
          </div>

          <div className="flex flex-col gap-3.5 text-left">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setIsTouched({ ...isTouched, password: true })}
              type="password"
              placeholder="Password"
              className={`w-full p-3 border rounded-lg bg-gray-100 transition ${isPasswordInvalid ? "border-red-500" : "border-gray-300"}`}
            />
            {isPasswordInvalid && <p className="text-red-500 text-sm">Password is required!</p>}
          </div>

          <button
            onClick={handleLogin}
            type="submit"
            className={`mt-2 w-full p-3 rounded-lg text-white transition ${
              email.trim().length > 0 && password.trim().length > 0
                ? "bg-black hover:bg-gray-900 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={email.trim().length === 0 || password.trim().length === 0}
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 flex flex-col items-center space-y-3">
          <button
            onClick={login}
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Sign in with Google 🚀
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LogIn;
