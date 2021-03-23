import React, { useState } from "react";
import { Redirect } from "react-router";
import manMatters from "../../logos/man-matters.png";
import goKwik from "../../logos/goKwik.png";
import paytm from "../../logos/paytm.png";

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
      <div className="color-div"></div>
      <div className="man-matters">
        <img
          className="man-matters-img"
          src={manMatters}
          alt="man-matter-img"
        />
      </div>
      <div className="congratulations">
        <b>
          <p className="congratulations-text">Congratulations</p>
        </b>
      </div>
      <div className="paytm-div">
        <img className="paytm-img" src={paytm} alt="paytm-img" />
      </div>

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
      <p className="info" hidden={inputText.length !== 0}>
        Enter the same number used on Man Matters
      </p>
      <button
        className="submit-btn"
        onClick={onSubmit}
        disabled={inputText.length !== 10}
      >
        Wow! Get my Paytm Gift Card >
      </button>
      <div className="goKwik">
        <img className="goKwik-img" src={goKwik} alt="goKwik-img" />
      </div>
    </div>
  );
}
