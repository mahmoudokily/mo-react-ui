import { ThemeProps } from "./Theme.props";
import { button } from "./button";
import { colors } from "./colors/colors";
import { form } from "./form";
import { tooltip } from "./tooltip";
import { variantEl } from "./variant";
import { typography } from "./typography";
import { fontSizes } from "./fonts";
import { breakpoint } from "./breakpoint";
import { grid } from "./grid";
import { overlay } from "./overlay/overlay";
import { zIndex } from "./zIndex/zIndex";
import { popover } from "./popover/popover";
import { pagination } from "./pagination/pagination";
export const theme: any = {
  colors: colors,
  button: button,
  variant: variantEl,
  tooltip: tooltip,
  form: form,
  typography: typography,
  fontSizes: fontSizes,
  breakpoint: breakpoint,
  grid: grid,
  overlay: overlay,
  zIndex: zIndex,
  popover: popover,
  pagination: pagination,
};
