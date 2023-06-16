import styled from "styled-components";
import { ArrowProps } from "./Arrow.types";

export const ArrowElement = styled.div<ArrowProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 0.5rem;
  height: 0.5rem;
  &:before,
  &:after {
    content: "";
    position: absolute;
    display: block;
    border-style: solid;
    border-color: transparent;
  }
`;
