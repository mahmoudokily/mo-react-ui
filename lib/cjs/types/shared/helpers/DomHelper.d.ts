export declare class DOMHelper {
    static TRANSITION_END: string[];
    static MOUSE_WHEEL: string[];
    static requestAnimationFrame: Function;
    static isServer: boolean;
    static isMobile: boolean;
    /**
     * Attaches events to the given element.
     *
     * @param el
     * @param events
     * @param callback
     * @param options
     */
    static addEventListener(el: HTMLElement | Document | Window, events: string[], callback: (e: any) => void, options?: boolean | AddEventListenerOptions): void;
    /**
     * Removes events from the given element.
     *
     * @param el
     * @param events
     * @param callback
     * @param options
     */
    static removeEventListener(el: HTMLElement | Document | Window, events: string[], callback: (e: any) => void, options?: boolean | EventListenerOptions): void;
    /**
     * Attaches events to the given element for once.
     *
     * @param el
     * @param events
     * @param callback
     * @param addOptions
     * @param removeOptions
     */
    static addEventListenerOnce(el: HTMLElement | Document | Window, events: string[], callback: (e: Event) => void, addOptions?: boolean | AddEventListenerOptions, removeOptions?: boolean | EventListenerOptions): void;
    /**
     * Checks if target is a clickable element.
     *
     * @param target
     * @param container
     */
    static checkIfTargetIsClickable(target: HTMLElement, container: HTMLElement): boolean;
    /**
     * Gets scroll parent of the given element.
     *
     * @param el
     */
    static getScrollParent(el: HTMLElement): HTMLElement | null;
    /**
     * Checks if an element can be rendered in the React portal.
     *
     * @param renderInPortal
     */
    static canBeRenderedInPortal(renderInPortal: boolean): boolean;
}
