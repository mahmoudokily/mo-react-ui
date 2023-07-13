import { ColorObject } from "./Helpers.Props";
export declare class ColorHelper {
    /**
     * Creates a color object with the given value and returns it.
     *
     * @param value
     */
    static getColor(value: string): ColorObject;
    /**
     * Mixes two colors.
     * If weight is a negative number, mixs value with white.
     * If weight is a positive number, mixs value with black.
     * Weight could be an three-length array. It applies different weight for red, green and blue respectively.
     *
     * @param value
     * @param weight
     */
    static mix(value: string, weight: number | number[]): string;
    /**
     * Gets the font color by value.
     * If the value is dark, returns the light font color or vice versa.
     *
     * @param value
     */
    static getFontColor(value: string): string;
    /**
     * Converts the given string color value to rgb string value.
     *
     * @param value
     */
    static convertToRgb(value: string): string;
}
