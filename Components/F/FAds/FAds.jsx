import React from "react";

function FAds() {
  return (
    <div className="FAds-Body">
      <div className="FAds-B-W">
        <div className="FAds-B">
          <div className="FAds-B-Hedding">Office Chair Collection</div>
          <div className="FAds-Link-Container">
            <a href="#" className="FAds-B-Link">
              View All Products
            </a>
          </div>
        </div>
        <div className="FAds-W">
          <div className="FAds-W-Hedding">Follow Our Store On Instagram</div>
          <div className="FAds-Link-Container">
            <a href="#" className="FAds-W-Link">
              @ UserName
            </a>
          </div>
        </div>
      </div>
      <div className="FAds-Image-Container">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FFAds.png?alt=media&token=9a728d84-aebf-4465-8972-28f44337eb16"
          className="insta-last-adds"
        />
      </div>
    </div>
  );
}

export default FAds;
