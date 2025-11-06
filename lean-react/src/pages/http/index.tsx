import ToggleSection from "@/components/ToggleSection";
import React from "react";
import HTTP from "./HTTP";
import Axios from "./Axios";

//

function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        리액트 HTTP 통신
      </h1>

      <ToggleSection title="1. Axios">
        <Axios />
      </ToggleSection>
    </div>
  );
}

export default Index;
