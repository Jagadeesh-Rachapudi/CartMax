import React from "react";
import W9 from "../Components/Watch/W9/W9";
import WatchC from "../Components/Watch/Watch-Cards/WatchC";
import Wh from "../Components/Watch/Watch-Hedder/Wh";
import Wnav from "../Components/Watch/Watch-Nav/Wnav";
import WBW from "../Components/Watch/WatchBW/WBW";
import WB from "../Components/Watch/WB/WB";
import WC from "../Components/Watch/WC/WC";
import WFC from "../Components/Watch/WFC/WFC";
import WFooter from "../Components/Watch/WFooter/WFooter";
import WS from "../Components/Watch/WS/WS";
import WT from "../Components/Watch/WT/WT";

function Watch() {
  return (
    <div>
      <Wnav />
      <Wh />
      <WFC />
      <WBW />
      <WS />
      <WB />
      <WT />
      <WC />
      <WatchC />
      <W9 />
      <WFooter />
    </div>
  );
}

export default Watch;
