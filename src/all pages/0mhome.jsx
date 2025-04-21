import React from "react";
import Main from "./1smain";
import Snav from "./1snav";

function FullPage() {
  return (
    <div className=" flex px-56 h-full">
      <Snav />
      <Main />
    </div>
  );
}

export default FullPage;
