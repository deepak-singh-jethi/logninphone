import React, { useState } from "react";
import { imgUrl } from "../utility/data";

const PhoneForm = ({ setGotPhone, phoneNumber, setPhoneNumber }) => {
  const [err, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = /^[0-9]{10}$/;
    if (regex.test(phoneNumber)) {
      setGotPhone(true);
    } else {
      setError("Invalid Phone Number");
    }
  };

  return (
    <>
      <img src={imgUrl} />
      <h3 style={{ textAlign: "center" }}>Login with Mobile Number</h3>

      <form id="phoneForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          placeholder="Enter Phone Number"
        />

        <button type="submit">Get OTP</button>
      </form>
      {err && <p id="errorMsg">{err}</p>}
    </>
  );
};

export default PhoneForm;
