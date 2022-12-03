import React from "react";
import Wh from "../Components/Watch/Watch-Hedder/Wh";
import Wnav from "../Components/Watch/Watch-Nav/Wnav";
import WBW from "../Components/Watch/WatchBW/WBW";
import WFC from "../Components/Watch/WFC/WFC";

function Watch() {
  return (
    <div>
      <Wnav />
      <Wh />
      <WFC />
      <WBW />
    </div>
  );
}

export default Watch;
