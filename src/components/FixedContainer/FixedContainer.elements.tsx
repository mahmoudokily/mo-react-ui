import styled from "styled-components";
import { Box } from "../Box";
import { FixedBoxElementProps } from "./FixedContainer.types";

export const FixedBoxElement = styled(Box)<FixedBoxElementProps>(
  ({ theme, $withShadow, width }) => `
    position: fixed;
    z-index: 1000;
    overflow: auto;

    ${
      $withShadow
        ? `
        box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
    `
        : ""
    }

    @media(max-width:768px) {
        position: static;
        ${!width ? "width: 100% !important;" : ""}
        height: auto !important;
        max-height: 100% !important;
    }
`
);
