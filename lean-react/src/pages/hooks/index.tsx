import React from "react";
import State01 from "../useState/State01";
import State02 from "../useState/State02";
import State03 from "../useState/State03";
import State04 from "../useState/State04";
import State05 from "../useState/State05";
import State06 from "../useState/State06";
import State06_Child from "../useState/State06_Child";
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
import Reducer01 from "../useReducer/Reducer01";
import Reducer02 from "../useReducer/Reducer02";
import Custom01 from "../useCustom/Custom01";
import Custom02 from "../useCustom/Custom02";
import Custom03 from "../useCustom/Custom03";
import TodoAppLocalStorage from "@/components/TodoAppLocalStorage";
import Webcam from "./Webcam";

function Index() {
  return (
    <div>
      <h1>=== 리액트 Hooks 학습 ===</h1>
      <ToggleSection title="8. 리액트 Hooks - Webcam">
        <Webcam />
      </ToggleSection>

      <ToggleSection title="7. 리액트 Hooks - Todo(LocalStorage)">
        <TodoAppLocalStorage />
      </ToggleSection>

      <ToggleSection title="6. 리액트 Hooks - custom Hooks">
        <Custom01 /> <hr />
        <Custom02 /> <hr />
        <Custom03 /> <hr />
      </ToggleSection>

      <ToggleSection title="5. 리액트 Hooks - useReducer">
        <Reducer01 /> <hr />
        <Reducer02 />
      </ToggleSection>

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
