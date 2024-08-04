import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [time, setTime] = useState(25 * 60); // 25 mins in secs
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [breakTime, setBreakTime] = useState(5 * 60); // 5 mins in secs
  const timerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current);
            setIsActive(false);
            if (isBreak) {
              setIsBreak(false);
              setTime(25 * 60);
            } else {
              setIsBreak(true);
              setTime(breakTime);
            }
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isActive, isBreak, breakTime]);

  const handleStartPause = () => {
    if (isActive) {
      clearInterval(timerRef.current);
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setIsActive(false);
    setIsBreak(false);
    setTime(25 * 60);
  };

  const handleBreak = () => {
    clearInterval(timerRef.current);
    setIsActive(true);
    setIsBreak(true);
    setTime(breakTime);
  };

  const increaseBreakTime = () => {
    setBreakTime((prev) => Math.min(prev + 60, 60 * 10)); // Max 10 mins
  };

  const decreaseBreakTime = () => {
    setBreakTime((prev) => Math.max(prev - 60, 60)); // Min 1 min
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-700 to-black min-h-screen">
      <main className="flex flex-col items-center justify-center bg-gray-700 rounded-lg p-10 max-w-xl w-full">
        <h1 className="font-bold text-white text-4xl mb-4 ">Pomodoro Timer</h1>
        <div className="bg-red-500 rounded-full border-8 border-gray-800 w-40 h-40 flex items-center justify-center mb-8">
          <span className="text-white text-2xl">{formatTime(time)}</span>
        </div>
        <div className="flex gap-4 mb-4">
          <button
            onClick={handleStartPause}
            className="rounded-lg bg-red-400 hover:bg-red-600 px-4 py-2"
          >
            {isActive ? "Pause" : "Start"}
          </button>
          <button
            onClick={handleReset}
            className="rounded-lg bg-red-400 hover:bg-red-600 px-4 py-2"
          >
            Reset
          </button>
        </div>
        <div className="flex gap-4 mb-4">
          <button
            onClick={handleBreak}
            className="rounded-lg bg-green-400 hover:bg-green-600 px-4 py-2"
          >
            Break Time
          </button>
        </div>
        <div className="flex gap-4 mb-4">
          <button
            onClick={decreaseBreakTime}
            className="rounded-lg bg-blue-400 hover:bg-blue-600 px-2 py-1"
          >
            -1 min
          </button>
          <span className="text-white text-xl">{formatTime(breakTime)}</span>
          <button
            onClick={increaseBreakTime}
            className="rounded-lg bg-blue-400 hover:bg-blue-600 px-2 py-1"
          >
            +1 min
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
