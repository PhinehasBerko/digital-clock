import React, { useState, useEffect, useRef } from "react";
import "../App.css";
const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    if (isRunning) {
      setIsRunning(true);
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  };
  const stop = () => {
    setIsRunning(false);
  };
  const reset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };
  const formatTime = () => {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    let formatedHours = String(hours).padStart(2, "0");
    let formatedMinutes = String(minutes).padStart(2, "0");
    let formatedSeconds = String(seconds).padStart(2, "0");
    let formatedMilliseconds = String(milliseconds).padStart(2, "0");

    return `${formatedMinutes}: ${formatedSeconds}: ${formatedMilliseconds}`;
  };
  return (
    <div className="main-container">
      <h2 className="clock-title">Stop Watch ⌚</h2>

      <div className="clock-container">
        <span>{formatTime()}</span>
        <div className="clock">
          <button onClick={start} className="start">
            start
          </button>
          <button onClick={stop} className="stop">
            stop
          </button>
          <button onClick={reset} className="reset">
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
