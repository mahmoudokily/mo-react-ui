import { VariantOptions } from "../../helpers";
import { VariantElProps } from "./VariantEl.Props";
export type VariantsProps = {
    [key: string]: VariantElProps;
};
/**
 * @param value
 *  @param options
 */
export declare const createVariant: (value: string | VariantElProps, options?: boolean | VariantOptions) => VariantElProps;
export declare const variantEl: {
    primary: VariantElProps;
    secondary: VariantElProps;
    success: VariantElProps;
    danger: VariantElProps;
    warning: VariantElProps;
    info: VariantElProps;
    light: VariantElProps;
    dark: VariantElProps;
    white: VariantElProps;
    black: VariantElProps;
};
