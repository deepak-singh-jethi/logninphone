import React, { useState, useEffect, useRef } from "react";
import Timer from "./Timer";

const OtpPage = ({ length, handleOTPSubmit, setGotPhone }) => {
  //useState for otp as an array of 4 length will "" value
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [resendActive, setResendActive] = useState("none");

  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < length - 1 && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRef.current[index].setSelectionRange(0, 1);
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      index > 0 &&
      !otp[index] &&
      inputRef.current[index - 1]
    ) {
      inputRef.current[index - 1].focus();
    }
    if (e.key === "Enter") {
      handleOTPSubmit(otp.join(""));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(otp);
    handleOTPSubmit("yes");
  };

  const handleChangeNumber = () => {
    setGotPhone(false);
    setResendActive("none");
  };

  return (
    <>
      <p>Enter OTP here 👇</p>
      <form
        id="otpContainer"
        onSubmit={(e) => {
          handleSubmit(e);
        }}>
        <div>
          {otp.map((value, index) => {
            return (
              <input
                type="text"
                key={index}
                value={value}
                ref={(input) => {
                  inputRef.current[index] = input;
                }}
                onChange={(e) => {
                  handleChange(index, e);
                }}
                onClick={() => {
                  handleClick(index);
                }}
                onKeyDown={(e) => {
                  handleKeyDown(index, e);
                }}
                className="otpIntput"
              />
            );
          })}
        </div>

        <button type="submit">Submit</button>
      </form>

      <p>
        <a href="#" style={{ pointerEvents: resendActive }}>
          Resend
        </a>
        {`  OTP in`}{" "}
        {<Timer setResendActive={setResendActive} seconds={20}></Timer>}
      </p>

      <button onClick={handleChangeNumber} id="changeNumberBtn">
        Change Number
      </button>
    </>
  );
};
export default OtpPage;
