/// <reference types="react" />
import { DefaultProps, Size, Variant } from "../../shared";
interface Props extends DefaultProps {
    $variant?: Variant;
    arrow?: string;
    isArrowInHeader?: boolean;
    $size?: Size;
}
export declare const ArrowElement: import("styled-components").IStyledComponent<"web", "div", {
    zIndex?: string | undefined;
}, never>;
export declare const PopoverElement: import("styled-components").IStyledComponent<"web", import("react").ForwardRefExoticComponent<import("../Box").BoxProps & import("react").RefAttributes<any>>, Props, never>;
export declare const PopoverHeader: import("styled-components").IStyledComponent<"web", ({ $tooltipId, $tooltipText, $onCopy, $clipboardText, $capitalizeFirstLetter, children, ...props }: import("react").PropsWithChildren<import("../Typography").TypographyProps>) => import("react").JSX.Element, Omit<Props, "as"> & Props, string | number>;
export declare const PopoverBody: import("styled-components").IStyledComponent<"web", import("react").ForwardRefExoticComponent<import("../Box").BoxProps & import("react").RefAttributes<any>>, Omit<Props, "as"> & Props, string | number>;
export {};
