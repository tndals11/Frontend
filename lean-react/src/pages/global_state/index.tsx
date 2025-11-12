import React from "react";
import Context from "./Context";
import ToggleSection from "@/components/ToggleSection";
import Zustand from "./Zustand";
import Signin from "./Signin";
import GlobalData from "./GlobalData";
import TrunckReservationList from "../../components/TrunckReservationList";
import TruckDetailPage from "@/components/TruckDetailPage";

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

      <ToggleSection title="4. Zustand 연습(global-data)">
        <GlobalData />
      </ToggleSection>

      <ToggleSection title="5. Zustand 연습(reservation)">
        <TruckDetailPage />
      </ToggleSection>
    </div>
  );
}

export default index;
