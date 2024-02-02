/** @format */
import { ButtonProps } from "./button/Button.types";
import { ColorsProps } from "./colors/Colors.types";
import { VariantElProps } from "./variant/VariantEl.Props";
import { TooltipProps } from "./tooltip/tooltip.types";
import { FormProps } from "./form/Form.types";
import { TypographyProps } from "./typography/Typography.types";
import { FontSizeProps } from "./fonts/fonts.types";
import { BreakPointsProps } from "./breakpoint/breakpoint.types";
import { GridProps } from "./grid/grid.types";
import { overlayProps } from "./overlay/overlay.types";
import { ZIndexProps } from "./zIndex/zIndex.types";
import { Pagination } from "./pagination/pagination.types";
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
    pagination: Pagination;
}
