import { ButtonProps } from "./button/Button.types";
import { ColorsProps } from "./colors/Colors.props";
import { VariantElProps } from "./variant/VariantEl.Props";
import { TooltipProps } from "./tooltip/tooltip.types";
import { FormProps } from "./form/Form.types";
import { TypographyProps } from "./typography/Typography.types";
import { FontSizeProps } from "./fonts/fonts.types";
import { BreakPointsProps } from "./breakpoint/breakpoint.types";
import { GridProps } from "./grid/grid.types";
import { overlayProps } from "./overlay/overlay.types";
import { ZIndexProps } from "./zIndex/zIndex.types";
import { PopoverProps } from "./popover/Popover.types";

export interface ThemeProps {
  colors: ColorsProps;
  button: ButtonProps;
  variant: VariantElProps;
  tooltip: TooltipProps;
  form: FormProps;
  typography: TypographyProps;
  fontSizes: FontSizeProps;
  breakpoint: BreakPointsProps;
  grid: GridProps;
  overlay: overlayProps;
  zIndex: ZIndexProps;
  popover: PopoverProps;
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
