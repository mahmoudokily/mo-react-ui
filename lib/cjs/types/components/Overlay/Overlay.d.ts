import React from "react";
import { JSXElementProps } from "../../shared";
export interface Props {
    children: JSX.Element;
    elementProps?: JSXElementProps;
    renderInBody?: boolean;
    breakpoint?: string;
    $background?: boolean;
}
declare const Overlay: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Overlay;
