/// <reference types="react" />
import { Variant } from "../../shared/helpers";
type LoaderProps = {
    variant?: Variant;
    size?: "small" | "default" | "large";
};
export declare const SimpleLoader: import("styled-components").IStyledComponent<"web", import("react").ForwardRefExoticComponent<import("../Box").BoxProps & import("react").RefAttributes<any>>, LoaderProps, never>;
export {};
