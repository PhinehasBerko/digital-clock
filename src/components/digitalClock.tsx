import React, { useState, useEffect, useRef } from "react";
import "../App.css";
const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {}, [isRunning]);

  function start() {
    if (isRunning) {
      setIsRunning(isRunning);
    }
  }
  function stop() {}
  function reset() {}
  function formatTime() {
    return;
  }
  return (
    <div className="clock-container">
      <span>00:00:00</span>
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
  );
};

export default Stopwatch;
