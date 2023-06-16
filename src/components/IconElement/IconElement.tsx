import styled from "styled-components";
import { IconElementProps } from "./IconElement.types";

export default styled.div<IconElementProps>(
  ({ theme }) => `
    align-self: stretch;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink:none;
    transition: background ${theme.button.transition};
`
);
