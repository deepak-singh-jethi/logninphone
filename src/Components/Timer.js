import React, { useEffect, useState } from "react";

const Timer = ({ setResendActive, seconds }) => {
  let timerFun;
  const [totalSeconds, setTotalSeconds] = useState(seconds);

  const formatTime = (time) => {
    return time < 10 ? "0" + time : time;
  };

  const updateTime = () => {
    setTotalSeconds((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        clearInterval(timerFun);
        return 0;
      }
    });
  };

  useEffect(() => {
    const timerFun = setInterval(updateTime, 1000);
    return () => {
      clearInterval(timerFun);
    };
  }, []);

  useEffect(() => {
    if (totalSeconds === 0) {
      setResendActive("auto");
    }
  }, [totalSeconds]);

  const getTime = (totalSeconds) => {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    return `${formatTime(minutes)}:${formatTime(seconds)}`;
  };

  return <span style={{ color: "red" }}>{getTime(totalSeconds)}</span>;
};

export default Timer;
