import React from "react";

function FACategory() {
  return (
    <div>
      <div className="FA-Cat-Top">
        .<div className="FA-Cat-Intro">CARTMAX CATEGORIES</div>
        <div className="FA-Cat-Hedding">
          Cartmax Shop <br /> By Category
        </div>
        <div className="FA-Cat-Products">
          <article className="FA-Cat-Product1 FA-Cat-Prod1">
            <article className="FA-Cat-Small-Product1"></article>
            <div className="FA-Cat-Tilte">SHOES</div>
            <div className="FA-Cat-Count">(5 ITEMS)</div>
          </article>
          <article className="FA-Cat-Product2 FA-Cat-Prod2 ">
            <article className="FA-Cat-Small-Product2"></article>
            <div className="FA-Cat-Tilte">GLASSES</div>
            <div className="FA-Cat-Count">(5 ITEMS)</div>
          </article>
          <article className="FA-Cat-Product3 FA-Cat-Prod3">
            <article className="FA-Cat-Small-Product3"></article>
            <div className="FA-Cat-Tilte">SHIRTS</div>
            <div className="FA-Cat-Count">(5 ITEMS)</div>
          </article>
          <article className="FA-Cat-Product4 FA-Cat-Prod4 ">
            <article className="FA-Cat-Small-Product4"></article>
            <div className="FA-Cat-Tilte">TROUSERS</div>
            <div className="FA-Cat-Count">(5 ITEMS)</div>
          </article>
        </div>
      </div>
      <div className="FA-Cat-Bottom"></div>
    </div>
  );
}

export default FACategory;
