import { useState, useEffect, useCallback } from "react";

const useCountdownTimer = (minutes) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0 ) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const startTimer = useCallback(() => {
    setTimeLeft(minutes * 60);
    setIsRunning(true);
  }, [minutes]);

  const resetTimer = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(minutes * 60);
  }, [minutes]);

  useEffect(() => {
    startTimer();
  }, [startTimer]);

  return { timeLeft };
};

export default useCountdownTimer;