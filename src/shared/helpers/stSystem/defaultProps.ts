import {
  background,
  borders,
  color,
  compose,
  flexbox,
  grid,
  layout,
  margin,
  padding,
  position,
  shadow,
  size,
  space,
  typography,
} from "styled-system";

export const defaultProps = compose(
  grid,
  space,
  color,
  size,
  layout,
  margin,
  shadow,
  borders,
  padding,
  flexbox,
  position,
  typography,
  background
);
