import React from "react";
import FFooter from "../Components/F/FFooter/FFooter";
import FLatest from "../Components/F/FLatest/FLatest";
import FM1 from "../Components/Fmini/FM1/FM1";
import FM2 from "../Components/Fmini/FM2/FM2";
import FM3 from "../Components/Fmini/FM3/FM3";

function FMini() {
  return (
    <div>
      <FM1 />
      <FM2 />
      <FM3 />
      <FLatest />
      <FFooter />
    </div>
  );
}

export default FMini;
