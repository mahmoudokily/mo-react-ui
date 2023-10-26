/// <reference types="react" />
import { JSXElementProps } from "../../shared";
export interface ElementProps {
}
export interface FixedBoxElementProps extends ElementProps {
    $withShadow?: boolean;
}
export interface FixedBoxOnRef {
    setPosition: () => void;
}
export interface FixedContainerProps {
    children: [JSX.Element, JSX.Element];
    boxProps?: JSXElementProps;
    status: boolean;
    setStatus: React.Dispatch<React.SetStateAction<boolean>>;
    minWidth?: number;
    space?: number;
    $withShadow?: boolean;
    transitionClassName?: string;
    transitionType?: string;
    transitionDuration?: number;
    showAnimation?: boolean;
    hideAnimation?: boolean;
    onRef?: (args: FixedBoxOnRef) => void;
}
