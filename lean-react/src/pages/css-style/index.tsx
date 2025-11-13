import React from "react";
import CSS from "./CSS";
import ToggleSection from "@/components/ToggleSection";
import Module from "./Module";
import StyleComponents from "./StyleComponents";
import Emotion from "./Emotion";
import EmotionPractice from "./emotion.practice/EmotionPractice";

function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        리액트 스타일(Style)
      </h1>

      <ToggleSection title="1. 일반 CSS">
        <CSS />
      </ToggleSection>

      <ToggleSection title="2. 모듈 CSS">
        <Module />
      </ToggleSection>

      <ToggleSection title="3. 스타일 컴포넌트 CSS">
        <StyleComponents />
      </ToggleSection>

      <ToggleSection title="4. 이모션 CSS">
        <Emotion />
      </ToggleSection>

      <ToggleSection title="5. 이모션 + 반응형">
        <EmotionPractice />
      </ToggleSection>
    </div>
  );
}

export default Index;
