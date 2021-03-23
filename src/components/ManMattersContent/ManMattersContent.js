import React from "react";
import manMatters from "../../logos/man-matters.png";
import paytm from "../../logos/paytm.png";

export default function ManMattersContent() {
  return (
    <>
      <div className="color-div"></div>
      <div className="man-matters">
        <img
          className="man-matters-img"
          src={manMatters}
          alt="man-matter-img"
        />
      </div>
      <div className="congratulations">
        <p className="congratulations-text">Congratulations</p>
        <span>🥳</span>
      </div>
      <div className="paytm-div">
        <img className="paytm-img" src={paytm} alt="paytm-img" />
      </div>
    </>
  );
}
