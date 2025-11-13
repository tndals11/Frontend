// : 공통 컴포넌트
import React from "react";

import styled from "@emotion/styled";
import { theme } from "./theme";

export const Input = styled.input`
  padding: 0.9rem;
  border: 1px solid #ddd;
  border-radius: ${theme.raduis.base};
  font-size: 1rem;
  width: 100%;
  transition: border 0.2s;

  &:focus {
    border: 1px solid ${theme.colors.primary};
    outline: none;
  }
`;
