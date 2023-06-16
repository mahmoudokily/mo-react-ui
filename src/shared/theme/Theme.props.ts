import { ButtonProps } from "./button";
import { ColorsProps } from "./colors";
import { VariantElProps } from "./variant";
import { TooltipProps } from "./tooltip";
import { FormProps } from "./form";
import { TypographyProps } from "./typography";
import { FontSizeProps } from "./fonts";

export interface ThemeProps {
  colors: ColorsProps;
  button: ButtonProps;
  variant: VariantElProps;
  tooltip: TooltipProps;
  form: FormProps;
  typography: TypographyProps;
  fontSizes: FontSizeProps;

  //   breakpoints: BreakPoints;
  //   typography: Typographies;
  //   button: ButtonProps;
  //   type: Types;
  //   form: Form;
  //   popover: Popover;
  //   zIndex: ZIndex;
  //   alert: Alert;
  //   tooltip: Tooltip;
  //   iconSize: IconSize;
  //   waveEffect: {
  //     transition: string;
  //   };
  //   fixedBox: {
  //     boxShadow: string;
  //   };
  //   grid: {
  //     breakpoint: Grid;
  //     containerWidth: Grid;
  //     columnGap: string;
  //   };
  //   overlay: {
  //     space: string;
  //     background: string;
  //   };
}
