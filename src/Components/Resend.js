import React, { useState, useEffect, useRef } from "react";

const Resend = ({ setOtp, length }) => {
  const [time, setTime] = useState(10);
  const [pointerEvent, setPointerEvent] = useState("none");
  const intervalRef = useRef();

  const restartTimer = () => {
    clearInterval(intervalRef.current); // Clear the existing interval

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(intervalRef.current);
          setPointerEvent("auto");

          // Set pointerEvent to auto when the timer completes
          return 0;
        }
      });
    }, 1000);
  };

  const handleClick = () => {
    setTime(10); // Reset the timer
    setPointerEvent("none"); // Set pointerEvent to none
    restartTimer(); // Restart the timer
    setOtp(new Array(length).fill(""));
  };

  useEffect(() => {
    restartTimer();
    return () => {
      clearInterval(intervalRef.current);
      // Clear the interval when the component changed
    };
  }, []);

  return (
    <div>
      <a href="#" style={{ pointerEvents: pointerEvent }} onClick={handleClick}>
        Resend
      </a>{" "}
      code in {time}
      {" Sec"}
    </div>
  );
};

export default Resend;
