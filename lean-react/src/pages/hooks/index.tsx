import React from "react";
import State01 from "./userState/State01";
import State02 from "./userState/State02";
import State03 from "./userState/State03";
import State04 from "./userState/State04";
import State05 from "./userState/State05";
import State06 from "./userState/State06";
import State06_Child from "./userState/State06_Child";
import Ref01 from "../useRef/Ref01";
import Ref02 from "../useRef/Ref02";
import Pratice01 from "../useRef/Pratice01";
import Pratice02 from "../useRef/Pratice02";
import Effect01 from "../useEffect/Effect01";
import Effect02 from "../useEffect/Effect02";
import ErrectPractice01 from "../useEffect/ErrectPractice01";
import ToggleSection from "@/components/ToggleSection";
import UserCallback01 from "../useCallback/UseCallback01";
import UserMemo01 from "../useCallback/UserMemo01";

function Index() {
  return (
    <div>
      <h1>=== 리액트 학습 ===</h1>
      <ToggleSection title="4. 리액트 - useCallback & useMemo">
        <UserCallback01 />
        <UserMemo01 />
      </ToggleSection>
      <ToggleSection title="3. 리액트 Hooks - useEffect">
        <Effect01 />
        <hr />
        <Effect02 />
        <hr />
        <ErrectPractice01 />
      </ToggleSection>

      <ToggleSection title="2. 리액트 Hooks - useRef">
        <Ref01 />
        <hr />
        <Ref02 />
        <hr />
        <Pratice01 />
        <hr />
        <Pratice02 />
        <hr />
      </ToggleSection>

      <ToggleSection title="1. 리액트 Hooks - useState">
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
      </ToggleSection>
    </div>
  );
}

export default Index;
