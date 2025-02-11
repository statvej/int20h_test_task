import { useState, useEffect, useMemo } from "react";

const usePasswordError = (password) => {
  const [error, setError] = useState("");
  const passwordRegex = useMemo(
    () => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    []
  );

  useEffect(() => {
      if (password && !passwordRegex.test(password)) {
        setError(
          "Password must contain at least 8 characters, including at least 1 uppercase letter, 1 lowercase letter, and 1 number."
        );
      } else {
        setError("");
      }
    }, [password, passwordRegex]);

    return error;
}

export default usePasswordError;