import React, { useState } from "react";
import { Redirect } from "react-router";
import GoKwikFooter from "../GoKwikFooter/GoKwikFooter";
import ManMattersContent from "../ManMattersContent/ManMattersContent";

export default function Home(props) {
  const [inputText, setInputText] = useState("");

  const onInputChange = (e) => {
    setInputText(e.target.value);
  };

  const onSubmit = (e) => {
    localStorage.setItem("isSubmitted", true);
    localStorage.setItem("mobileNumber", inputText);
    props.history.push("/thank-you");
  };

  if (localStorage.getItem("isSubmitted") === "true") {
    return <Redirect to="/thank-you" />;
  }
  return (
    <div className="home-wrapper">
      <ManMattersContent />
      <div className="won-text">
        <p>
          You have WON Paytm Gift
          <br /> Card of Rs 200 for
          <b>
            {" "}
            placing the order
            <br />
            on Man Matters
          </b>
        </p>
      </div>
      <input
        className="number-input"
        value={inputText}
        type="number"
        onChange={onInputChange}
        placeholder="Enter Mobile Number"
      ></input>
      <p className={`info ${inputText.length === 0 ? "" : "hidden"}`}>
        Enter the same number used on Man Matters
      </p>
      <button
        className="submit-btn"
        onClick={onSubmit}
        disabled={inputText.length !== 10}
      >
        Wow! Get my Paytm Gift Card >
      </button>
      <GoKwikFooter />
    </div>
  );
}
