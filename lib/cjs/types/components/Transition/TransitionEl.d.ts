import React from "react";
import { TransitionProps } from "./Transitions.types";
interface State {
    display: boolean;
}
export declare class TransitionEl extends React.Component<TransitionProps, State> {
    private static defaultProps;
    private status;
    private processing;
    constructor(props: TransitionProps);
    componentDidMount(): void;
    componentDidUpdate(op: any, os: any): void;
    /**
     * Sets display state.
     *
     * @param props
     * @param state
     */
    setDisplay: (props: TransitionProps, state: State) => void;
    /**
     * Shows the element.
     */
    show: () => void;
    /**
     * Hides the element.
     */
    hide: () => void;
    render(): JSX.Element | null;
}
export {};
