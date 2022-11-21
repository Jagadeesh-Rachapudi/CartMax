import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsCurrencyDollar,BsPerson } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
function ETopRibbon() {
  return (
    <div className="E-TopRibbon-Body">
      <div className="E-TopRibbon-Content">
        <div className="E-TR-Store-Container">
          <CiLocationOn className="E-TR-Icon" />
          <div className="E-TR-Store-Content">Store Locator</div>
        </div>
        <div className="E-TR-Store-Container">
          <TbTruckDelivery className="E-TR-Icon" />
          <div className="E-TR-Store-Content">Track Your Order</div>
        </div>
        <div className="E-TR-Store-Container">
          <BsCurrencyDollar className="E-TR-Icon" />
          <div className="E-TR-Store-Content">Dollor( US )</div>
        </div>
        <div className="E-TR-Store-Container">
          <BsPerson className="E-TR-Icon" />
          <div className="E-TR-Store-Content">Registor or Sign in</div>
        </div>
      </div>
    </div>
  );
}

export default ETopRibbon;
