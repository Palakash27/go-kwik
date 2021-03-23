import React from "react";
import manMatters from "../../logos/man-matters.png";
import other from "../../logos/other.png";
import goKwik from "../../logos/goKwik.png";
import paytm from "../../logos/paytm.png";

export default function Thankyou() {
  return (
    <div className="ty-wrapper">
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
        <img className="other-img" src={other} alt="other-img" />
      </div>
      <div className="goKwik">
        <img className="goKwik-img" src={goKwik} alt="goKwik-img" />
      </div>
    </div>
  );
}
