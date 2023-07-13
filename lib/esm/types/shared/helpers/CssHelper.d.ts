export interface JSXElementProps {
    [key: string]: any;
}
export type Value = string | number;
type Theme = any;
export declare class CSSHelper {
    private static BREAKPOINT;
    /**
     * Gets CSS reference(s) by key.
     *
     * @param props - Styled component props
     * @param key
     */
    static getCSSByProps(props: JSXElementProps, key: string): string;
    /**
     * If value is string, returns it as it is.
     * If it is a number, converts it to string and adds "px" suffix.
     *
     * @param value
     */
    static setValue(value: Value): string;
    /**
     * If value is registered in theme.zIndex, returns the property in the theme, if not returns the value.
     *
     * @param value
     * @param theme
     */
    static setZIndex(value: Value, theme: Theme): string;
    /**
     * If value is registered in theme.length, returns the property in the theme, if not returns the value.
     *
     * @param value
     * @param theme
     */
    static setLength(value: Value, theme: Theme): string;
    /**
     * If value is registered in theme.radius, returns the property in the theme, if not returns the value.
     *
     * @param value
     * @param theme
     */
    static setRadius(value: Value, theme: Theme): string;
    /**
     * If value is registered in theme.color, returns the property in the theme.
     * If it is registered as a type in the theme, returns type color in the theme.
     * If not returns the value.
     *
     * @param value
     * @param theme
     */
    static setColor(value: string, theme: Theme): string;
    /**
     * If value is registered in theme.fontFamily, returns the property in the theme, if not returns the value.
     *
     * @param value
     * @param theme
     */
    static setFontFamily(value: string, theme: Theme): string;
    /**
     * If value is registered in theme.fontWeight, returns the property in the theme, if not returns the value.
     *
     * @param value
     * @param theme
     */
    static setFontWeight(value: Value, theme: Theme): string;
    /**
     * If value is registered in theme.fontSize, returns the property in the theme, if not returns the value.
     *
     * @param value
     * @param theme
     */
    static setFontSize(value: Value, theme: Theme): string;
    /**
     * If value is registered in theme.iconSize, returns the property in the theme, if not returns the value.
     *
     * @param value
     * @param theme
     */
    static setIconSize(value: Value, theme: Theme): string;
}
export type ElementPropValueMethod = (value: any, theme: any) => string;
export {};
