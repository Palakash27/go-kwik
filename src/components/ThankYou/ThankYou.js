import React from "react";
import whatsappImg from "../../logos/whatsapp-logo.jpg";
import cancelImg from "../../logos/folder-logo.png";
import folderImg from "../../logos/cancel-logo.png";
import ManMattersContent from "../ManMattersContent/ManMattersContent";
import GoKwikFooter from "../GoKwikFooter/GoKwikFooter";

export default function Thankyou() {
  return (
    <div className="ty-wrapper">
      <ManMattersContent />
      <div className="other-text">
        <div className="other-text-row">
          <div className="image-div">
            <img src={whatsappImg} alt="whatsapp-icon" />
          </div>
          <div className="QA-div">
            <p className="que-text">Where will I get the gift card?</p>
            <p>You will receive it on Whatsapp/SMS on your mobile.</p>
          </div>
        </div>
        <div className="other-text-row">
          <div className="image-div">
            <img src={cancelImg} alt="folder-icon" />
          </div>
          <div className="QA-div">
            <p className="que-text">When will I receive the gift card?</p>
            <p>Within 48 hours, when your Man Matters order is delieverd.</p>
          </div>
        </div>
        <div className="other-text-row">
          <div className="image-div">
            <img src={folderImg} alt="cancel-icon" />
          </div>
          <div className="QA-div">
            <p className="que-text">What if I cancel the order?</p>
            <p>The voucher will not delivered if you cancel the order</p>
          </div>
        </div>
      </div>
      <GoKwikFooter />
    </div>
  );
}
