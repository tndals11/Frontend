import React from "react";
import State01 from "./userState/State01";
import State02 from "./userState/State02";
import State03 from "./userState/State03";
import State04 from "./userState/State04";
import State05 from "./userState/State05";
import State06 from "./userState/State06";
import State06_Child from "./userState/State06_Child";
import Ref01 from "../useRef/Ref01";

const h2style = {
  backgroundColor: "black",
  color: "orange",
};

function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        === 리액트 Hooks ===
      </h1>
      <h2 style={h2style}>2. 리액트 Hooks - useRef</h2>
      <Ref01 />
      <h2 style={h2style}>1. 리액트 Hooks - useState</h2>
      <State01 />
      <hr />
      <State02 />
      <hr />
      <State03 />
      <hr />
      <State04 />
      <hr />
      <State05 />
      <hr />
      <State06 />
      <hr />
    </div>
  );
}

export default Index;
