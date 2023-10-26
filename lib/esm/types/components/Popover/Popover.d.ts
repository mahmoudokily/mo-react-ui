import React from "react";
import { SizeProps } from "styled-system";
import { JSXElementProps, SetValue, TooltipAttributes, Variant } from "../../shared";
export interface Props extends SizeProps {
    children: [JSX.Element, JSX.Element];
    elementProps?: JSXElementProps;
    status: boolean;
    setStatus: SetValue<boolean>;
    variant?: Variant;
    position?: string;
    closeOnClickAway?: boolean;
    renderInBody?: boolean;
}
interface State {
    attrs: TooltipAttributes;
}
export declare class Popover extends React.Component<Props, State> {
    private static defaultProps;
    private container;
    private el;
    private arrowEl;
    constructor(props: any);
    componentDidMount: () => void;
    componentDidUpdate: (op: any) => void;
    componentWillUnmount: () => void;
    /**
     * Toggles element.
     */
    toggle: () => void;
    /**
     * Open element.
     */
    open: () => void;
    /**
     * Closes element if target is not in the container element.
     */
    close: () => void;
    detect: (e: Event) => void;
    /**
     * Sets position of the element.
     */
    setPosition: () => void;
    render(): React.JSX.Element;
}
export {};
