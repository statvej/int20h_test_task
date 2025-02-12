import Header from "./Header";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isInvalid = isTouched && code.trim().length === 0;

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:8080/auth/verify/${code}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if(res.status === 200)
        navigate("/login");
      else
        throw new Error("Error verifying code:", res);
    } catch (error) {
      throw new Error("Error verifying code:", error);
    }
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Header flag='2' />
      <div className="w-full max-w-sm bg-gray-100 p-6 rounded-lg shadow-md">
        <form className="space-y-4">
          <div className="flex flex-col gap-2.5 text-left">
            <label className="block text-gray-700 font-medium">Enter your code from Email:</label>
            <input 
              type="text"
              placeholder="xx-yy-zz"
              className={`w-full p-3 border rounded-lg bg-gray-100 transition ${
                isInvalid ? "border-red-500" : "border-gray-300"
              }`}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onBlur={() => setIsTouched(true)}
            />
          </div>
          <button 
            onClick={handleVerify}
            type="submit"
            className={`mt-6 w-full p-3 rounded-lg text-white transition ${
              code.trim().length > 0
                ? "bg-black hover:bg-gray-900"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={code.trim().length === 0}
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}

export default Verify
