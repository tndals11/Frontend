//% : 공통 컴포넌트 (버튼)

import styled from "@emotion/styled";
import { theme } from "./theme";

export const Button = styled.button`
  padding: 0.9rem;
  background-color: ${theme.colors.primary};
  color: #fff;
  font-weight: 600;
  border-radius: ${theme.raduis.base};
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;
