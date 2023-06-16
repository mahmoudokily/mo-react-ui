import React from "react";
import styled from "styled-components";
import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  size,
  space,
} from "styled-system";
import { BoxProps } from "./Box.types";
import WaveEffect from "../WaveEffect/WaveEffect";

export const BoxEl = styled.div<BoxProps>`
  box-sizing: border-box;
  ${({
    theme,
    $column,
    $row,
    $variant = "white",
    $shape = "default",
    $withBorder = false,
    $clickable,
    $flex,
  }) => `
  background-color :${$variant ? theme.variant[$variant].main : ""};
  border-radius:${theme?.button?.radius[$shape]} ;
  border: ${$withBorder ? `solid 1px ${theme.variant?.[$variant].main}` : ""};
  cursor :${$clickable ? "pointer" : "default"};
  display:${$flex ? "flex" : ""}


  
  
  
  `};
  ${compose(
    space,
    color,
    size,
    layout,
    background,
    flexbox,
    grid,
    border,
    shadow,
    position
  )}
`;

export const Box = React.forwardRef<any, BoxProps>(({ ...props }, ref) => {
  return props?.$clickable ? (
    <WaveEffect>
      <BoxEl ref={ref} {...props} />
    </WaveEffect>
  ) : (
    <BoxEl ref={ref} {...props} />
  );
});
