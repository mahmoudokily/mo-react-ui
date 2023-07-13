import { TooltipAttributes } from "./Helpers.Props";
export default class TooltipHelper {
    private static positionOrder;
    /**
     * Calculates tooltip position by the given position status.
     *
     * @param target
     * @param container
     * @param global
     * @param position
     * @param header
     * @param arrow
     */
    private static getPosition;
    /**
     * Gets tooltip attributes.
     *
     * @param target
     * @param container
     * @param position
     * @param header
     * @param arrow
     */
    static getAttributes(target: HTMLElement, container: HTMLElement, position: string, header?: HTMLElement, arrow?: HTMLElement): TooltipAttributes;
}
