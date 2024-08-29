import React, { useState, useEffect, useRef } from 'react';

function Timer() {
  const [time, setTime] = useState(0); // State to track time in seconds
  const [isRunning, setIsRunning] = useState(false); // State to track if timer is running
  const timerRef = useRef(null); // Reference to the timer

  useEffect(() => {
    // Update the document title every second to reflect the current time spent
    document.title = `Time spent: ${formatTime(time)}`;
    
    return () => {
      // Cleanup the effect
      document.title = 'Time Tracker';
    };
  }, [time]);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Time Tracker</h1>
      <h2>{formatTime(time)}</h2>
      <button onClick={startTimer} disabled={isRunning}>
        Start Timer
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop Timer
      </button>
      <button onClick={resetTimer}>
        Reset Timer
      </button>
    </div>
  );
}

export default Timer;
