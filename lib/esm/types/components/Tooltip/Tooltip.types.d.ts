/// <reference types="react" />
import { DefaultProps, Size, Variant } from "../../shared";
export interface TooltipProps extends DefaultProps {
    children: [JSX.Element, JSX.Element];
    $variant?: Variant;
    $size?: Size;
    $position?: string;
    $renderInBody?: boolean;
    $transitionClassName?: string;
    $transitionType?: string;
    $transitionDuration?: number;
    $showAnimation?: boolean;
    $hideAnimation?: boolean;
}
export interface TProps extends DefaultProps {
    $variant: string;
    arrow: string;
    $size: Size;
}
