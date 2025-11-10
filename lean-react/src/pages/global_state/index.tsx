import React from "react";
import Context from "./Context";
import ToggleSection from "@/components/ToggleSection";
import Zustand from "./Zustand";
import Signin from "./Signin";

function index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        리액트 HTTP 통신
      </h1>

      <ToggleSection title="1. ContextAPI">
        <Context />
      </ToggleSection>

      <ToggleSection title="2. Zustand">
        <Zustand />
      </ToggleSection>

      <ToggleSection title="3. SignIn 페이지">
        <Signin />
      </ToggleSection>
    </div>
  );
}

export default index;
