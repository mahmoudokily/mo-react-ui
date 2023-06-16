import styled, { keyframes } from "styled-components";

import { Variant } from "../../shared/helpers";
import { Box } from "../Box";

const SpinnerContainer = styled.div`
  height: 50px;
  width: 200px;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.colors.primary};
  align-items: center;
  border-top-left-radius: 3px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
`;

const Dot = styled.div<{ num: number }>`
  transform: none;
  animation: move 1s linear infinite forwards;
  animation-delay: ${({ num }) => num}s;
  width: 25px;
  height: 25px;
  color: white;
  padding: 10px;
  border-radius: 50%;
  z-index: 1;
  @keyframes move {
    0% {
      transform: translateY(0%);
    }
    25% {
      transform: translateY(-40%);
    }
    50% {
      transform: translateY(-80%);
    }
    75% {
      transform: translateY(10%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
type LoaderProps = {
  variant?: Variant;
  size?: "small" | "default" | "large";
};

export const SimpleLoader = styled(Box)<LoaderProps>`
  animation: ${rotate} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid
    ${({ theme, variant = "primary" }) =>
      theme.variant[variant].loader?.borderTop};
  border-right: 2px solid
    ${({ theme, variant = "primary" }) =>
      theme.variant[variant].loader?.borderRight};
  border-bottom: 2px solid
    ${({ theme, variant = "primary" }) =>
      theme.variant[variant].loader?.borderBottom};
  border-left: 4px solid
    ${({ theme, variant = "primary" }) =>
      theme.variant[variant].loader?.borderLeft};
  background: transparent;
  width: 16px;
  height: 16px;
  border-radius: 50%;
`;
