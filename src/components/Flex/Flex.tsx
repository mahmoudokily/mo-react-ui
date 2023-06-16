import styled, { css } from "styled-components";
import { Box } from "../Box";
import { FlexProps } from "./Flex.types";

export const Flex = styled(Box).attrs({})<FlexProps>`
  display: flex !important;
  flex-direction: column;
  height: 100%;

  ${({ $fullSize }) =>
    $fullSize &&
    css`
      width: 100%;
      height: 100%;
    `}
`;

Flex.defaultProps = {
  $fullSize: false,
};
