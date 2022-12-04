import React from "react";
import W9 from "../Components/Watch/W9/W9";
import WFooter from "../Components/Watch/WFooter/WFooter";
import D3 from "../Components/WatchDark/D3/D3";
import D4 from "../Components/WatchDark/D4/D4";
import D5 from "../Components/WatchDark/D5/D5";
import DHedder from "../Components/WatchDark/DHedder/DHedder";
import DNav from "../Components/WatchDark/DNav/DNav";

function WatchMini() {
  return (
    <div className="WatchMini-Body">
      <DNav />
      <DHedder />
      <D3 />
      <D4 />
      <D5 />
      <W9 />
      <WFooter />
    </div>
  );
}

export default WatchMini;
