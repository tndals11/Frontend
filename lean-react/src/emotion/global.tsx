import type { ThemeType } from "./theme";
import { css, Global } from "@emotion/react";

export const GlobalStyles = ({ theme }: { theme: ThemeType }) => (
  // 전역으로 적용할 스탄일을 작성한 Global 컴포넌트를 반환하여
  // , 해당 컴포넌트를 main.tsx 또는 App.tsx에 적용
  <Global
    styles={css`
      * {
        box-sizing: border-box;
        transition: background 0.3s, color 0.3s, border 0.3s;
      }
      body {
        margin: 0;
        padding: 0;
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
      }
    `}
  />
);
