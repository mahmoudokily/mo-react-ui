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
}
