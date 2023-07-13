/// <reference types="react" />
import { InputContainerProps, InputIconProps, InputProps } from "./Input.types";
import { TypographyProps } from "../Typography";
export declare const InputError: import("styled-components").IStyledComponent<"web", ({ $tooltipId, $tooltipText, $onCopy, $clipboardText, $capitalizeFirstLetter, children, ...props }: import("react").PropsWithChildren<TypographyProps>) => import("react").JSX.Element, Omit<{
    variant: string;
}, "as"> & TypographyProps, "variant">;
export declare const InputIcon: import("styled-components").IStyledComponent<"web", import("react").ForwardRefExoticComponent<import("../Box").BoxProps & import("react").RefAttributes<any>>, InputIconProps, never>;
export declare const InputElement: import("styled-components").IStyledComponent<"web", "input", InputProps, never>;
export declare const InputContainer: import("styled-components").IStyledComponent<"web", import("react").ForwardRefExoticComponent<import("../Box").BoxProps & import("react").RefAttributes<any>>, InputContainerProps, never>;
