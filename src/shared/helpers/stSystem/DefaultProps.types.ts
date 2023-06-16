import {
  BackgroundColorProps,
  BackgroundProps,
  BordersProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  MarginProps,
  PaddingProps,
  PositionProps,
  ShadowProps,
  SizeProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";

export interface DefaultProps
  extends SpaceProps,
    // ColorProps<CustomTheme, Color> &
    TypographyProps,
    LayoutProps,
    PaddingProps,
    MarginProps,
    FlexboxProps,
    GridProps,
    BackgroundProps,
    BordersProps,
    PositionProps,
    ShadowProps,
    SizeProps,
    BackgroundColorProps {}
