import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    if (!token) {
      setError("Verification token is missing.");
      setIsLoading(false);
      return;
    }

    const verifyToken = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/auth/verify?token=${token}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.status === 200) {
          navigate("/login");
        } else {
          throw new Error("Verification failed");
        }
      } catch (error) {
        setError(`Failed to verify token. Please try again. ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    verifyToken();
  }, [location, navigate]);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Header flag="2" />
      <div className="w-full max-w-sm bg-gray-100 p-6 rounded-lg shadow-md text-center">
        {isLoading ? (
          <p className="text-gray-700">Verifying...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p className="text-green-500">Verification successful! Redirecting...</p>
        )}
      </div>
    </div>
  );
};

export default Verify;
