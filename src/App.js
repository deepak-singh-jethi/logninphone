import React, { useState } from "react";
import "./App.css";
import PhoneForm from "./Components/PhoneForm";
import OtpPage from "./Components/OtpPage";

function App() {
  const [gotPhone, setGotPhone] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOTPSubmit = (otp) => {
    console.log("login");
  };
  return (
    <div className="App">
      <h1>D-App</h1>
      {!gotPhone ? (
        <PhoneForm
          setGotPhone={setGotPhone}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}></PhoneForm>
      ) : (
        <OtpPage
          length={4}
          handleOTPSubmit={handleOTPSubmit}
          setGotPhone={setGotPhone}></OtpPage>
      )}
    </div>
  );
}

export default App;
