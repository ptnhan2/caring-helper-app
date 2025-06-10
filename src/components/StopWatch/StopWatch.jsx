import React, {useState, useRef} from "react";

const Stopwatch = () => {
    const [second, setSecond] = useState(0);
    const intervalRef = useRef(null);
    const startTimer = () => {
        if(intervalRef.current !== null) return;

        intervalRef.current = setInterval(()=>{
            setSecond((prev)=>prev + 1)
        },1000);

    };

    const stopTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }

    const resetTimer = () => {
        stopTimer();
        setSecond(0);
        intervalRef.current = null;

    }
    const formatTime = (second) => {
        const minutes = Math.floor(second / 60);
        const remainingSeconds = second % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    }
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h2>Stopwatch</h2>
          <h1>{formatTime(second)}</h1>
          <div>
            <button onClick={startTimer}>Start</button>{" "}
            <button onClick={stopTimer}>Stop</button>{" "}
            <button onClick={resetTimer}>Reset</button>
          </div>
        </div>
      );
};

export default Stopwatch;
