import * as React$1 from 'react';
import React__default, { RefObject, HTMLAttributes, ReactNode } from 'react';
import * as styled_components from 'styled-components';
import * as styled_system from 'styled-system';
import { SpaceProps, TypographyProps as TypographyProps$1, LayoutProps, PaddingProps, MarginProps, FlexboxProps, GridProps as GridProps$1, BackgroundProps, BordersProps, PositionProps, ShadowProps, SizeProps, BackgroundColorProps } from 'styled-system';
import { Options } from 'react-copy-to-clipboard';

interface ThemeVariable<T> {
    [key: string]: T;
}
interface Coordinator<T> {
    x: T;
    y: T;
}
interface ColorObject {
    color: number[];
    valpha: number;
    isDark: () => boolean;
    isLight: () => boolean;
    hex: () => ColorObject;
    rgb: () => ColorObject;
    hsl: () => ColorObject;
    darken: (value: number) => ColorObject;
    alpha: (value: number) => ColorObject;
}
type Shape = "default" | "square" | "rounded" | "circle";
type Size = "small" | "default" | "large";
type TypographySize = "display20" | "title40" | "title30" | "title20" | "title10" | "body30" | "body20" | "body10" | "caption30" | "caption20" | "caption10";
type Variant = "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "light" | "dark" | "black" | "white";
interface TypeOptions {
    util?: boolean;
    alert?: boolean;
    breadcrumb?: boolean;
    button?: boolean;
    dropdown?: boolean;
    form?: boolean;
    pagination?: boolean;
    popover?: boolean;
    progressBar?: boolean;
    table?: boolean;
    waveEffect?: boolean;
    loader?: boolean;
}
interface VariantOptions {
    util?: boolean;
    alert?: boolean;
    breadcrumb?: boolean;
    button?: boolean;
    dropdown?: boolean;
    form?: boolean;
    pagination?: boolean;
    popover?: boolean;
    progressBar?: boolean;
    table?: boolean;
    waveEffect?: boolean;
    loader?: boolean;
}
interface SizeStrictProps {
    size: string;
    sizeSm: string;
    sizeMd: string;
    sizeLg: string;
    sizeXl: string;
}
type SetValue<T> = ((value: T) => void) | React.Dispatch<React.SetStateAction<T>>;
interface Grid {
    small: number;
    medium: number;
    large: number;
    xlarge: number;
}
interface TooltipAttributes {
    arrow?: string;
    transform?: string;
    arrowTransform?: string;
    isArrowInHeader?: boolean;
}
interface TooltipPositionResult {
    position: string;
    status: boolean;
    overflow: number;
    transform?: string;
    arrowTransform?: string;
    isArrowInHeader: boolean;
}

declare class ColorHelper {
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

declare class DOMHelper {
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

interface JSXElementProps {
    [key: string]: any;
}
type Value = string | number;
type Theme = any;
declare class CSSHelper {
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
type ElementPropValueMethod = (value: any, theme: any) => string;

interface DefaultProps extends SpaceProps, TypographyProps$1, LayoutProps, PaddingProps, MarginProps, FlexboxProps, GridProps$1, BackgroundProps, BordersProps, PositionProps, ShadowProps, SizeProps, BackgroundColorProps {
}

declare const defaultProps: styled_system.styleFn;

type DefaultValuesProps = {
    DARK_LEVEL: number;
    DARKER_LEVEL: number;
    LIGHT_LEVEL: number;
    LIGHTER_LEVEL: number;
    SHADOW_FADE_LEVEL: number;
    JSX_ELEMENT_PROPS: {};
    FORM_INPUT_PLACEHOLDER_FILL_FADE_LEVEL: number;
};

declare const defaultValues: DefaultValuesProps;

declare const useCloseOnClickAway: (ref: RefObject<HTMLDivElement> | RefObject<HTMLDivElement>[], handler: (event: TouchEvent | MouseEvent) => void, active?: boolean) => void;

interface ButtonProps$1 extends HTMLAttributes<HTMLButtonElement> {
    $variant?: Variant;
    $iconPosition?: "left" | "right";
    $fill?: boolean;
    $link?: boolean;
    $withBorder?: boolean;
    $shape?: Shape;
    $block?: boolean;
    $fixedSize?: boolean;
    $disabled?: boolean;
    $loading?: boolean;
    $size?: Size;
    $iconProps?: JSXElementProps;
    $icon?: ReactNode;
    $withEffect?: boolean;
    $withShadow?: boolean;
    $tooltipText?: string;
}

declare const Button: React__default.ForwardRefExoticComponent<ButtonProps$1 & {
    children?: React__default.ReactNode;
} & React__default.RefAttributes<any>>;

interface WaveEffectProps {
    children: JSX.Element;
    $variant?: string;
    transitionDuration?: number;
}

declare const theme: any;

interface ColorsProps {
    white: {
        default: string;
        translucent: string;
    };
    dark: {
        default: string;
        light: string;
        dark: string;
        gradient: string;
    };
    primary: {
        default: string;
        light: string;
        dark: string;
        gradient: string;
    };
    secondary: {
        default: string;
        light: string;
        dark: string;
        gradient: string;
    };
    success: {
        default: string;
        light: string;
        dark: string;
        gradient: string;
    };
    danger: {
        default: string;
        light: string;
        dark: string;
        gradient: string;
    };
    warning: {
        default: string;
        light: string;
        dark: string;
        gradient: string;
    };
    info: {
        default: string;
        light: string;
        dark: string;
        gradient: string;
    };
    gray: {
        gray50: string;
        gray100: string;
        gray200: string;
        gray300: string;
        gray400: string;
        gray500: string;
        gray600: string;
        gray700: string;
        gray800: string;
        gray900: string;
    };
    text: {
        body: {
            light: string;
            dark: string;
            muted: string;
        };
        heading: {
            light: string;
            dark: string;
        };
    };
    border: {
        light: string;
        dark: string;
    };
    input: {
        default: {
            border: string;
            background: string;
            placeholder: string;
            text: string;
        };
        active: {
            border: string;
            background: string;
            placeholder: string;
        };
        muted: {
            background: string;
            placeholder: string;
        };
    };
    defaultValues: {
        buttonBg: string;
        FORM_DISABLED_BG_COLOR: string;
        FORM_RADIO_BORDER_COLOR: string;
        FORM_INPUT_BG_COLOR: string;
        FORM_INPUT_BORDER_COLOR: string;
        FORM_INPUT_PLACEHOLDER_COLOR: string;
        FORM_RADIO_COLOR: string;
        FORM_INPUT_DISABLED_BACKGROUND: string;
    };
}

/** @format */

declare const colors: ColorsProps;

interface ButtonProps {
    fixedSize: ThemeVariable<string>;
    padding: ThemeVariable<Coordinator<string> & {
        xHalf: string;
    }>;
    radius: ThemeVariable<string>;
    fontSize: ThemeVariable<string>;
    disabledOpacity?: number;
    transition?: string;
}

interface VariantElProps {
    main: string;
    font?: string;
    dark?: string;
    darker?: string;
    darkest?: string;
    light?: string;
    lighter?: string;
    lightest?: string;
    shadow?: string;
    /**button */
    button?: {
        background?: string;
        placeholder?: string;
        placeholderFill?: string;
    };
    waveEffect?: {
        color?: string;
    };
    form?: {
        radioColor?: string;
        radioBorder?: string;
        inputBackground?: string;
        inputBorder?: string;
        inputFont?: string;
        inputPlaceholder?: string;
        inputPlaceholderFill?: string;
        disabledBackgroundColor?: string;
    };
}

type TooltipProps$1 = {
    padding: ThemeVariable<Coordinator<string>>;
    radius: string;
    fontSize: ThemeVariable<string>;
};

interface FormProps {
    disabledOpacity: number;
    radioSpanSpace: string;
    inputBorder?: string;
    radioSpanFontSize: ThemeVariable<string>;
    inputPadding?: ThemeVariable<Coordinator<string>>;
    inputRadius?: ThemeVariable<string>;
    inputFontSize?: ThemeVariable<string>;
    optionPadding?: ThemeVariable<string>;
    optionMargin?: ThemeVariable<Coordinator<string>>;
    optionFontSize?: ThemeVariable<string>;
}

interface TypographyProps {
    display20: TypographyVariant;
    title40: TypographyVariant;
    title30: TypographyVariant;
    title20: TypographyVariant;
    title10: TypographyVariant;
    body30: TypographyVariant;
    body20: TypographyVariant;
    body10: TypographyVariant;
    caption30: TypographyVariant;
    caption20: TypographyVariant;
    caption10: TypographyVariant;
}
type TypographyVariant = {
    fontSize: number;
    fontWeight: number;
};

interface FontSizeProps {
    none: string;
    xxs: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
    xxxl: string;
}

interface BreakPointsProps {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
}

type GridProps = {
    breakpoint: {
        small: number;
        medium: number;
        large: number;
        xlarge: number;
    };
};

type overlayProps = {
    space: string;
    background: string;
};

type ZIndexProps = {
    buttonLoading: number;
    fixedBox: number;
    loading: number;
    modal: number;
    overlay: number;
    popover: number;
    routerProgressBar: number;
    tooltip: number;
    waveEffect: number;
};

type Pagination = {
    padding: Coordinator<string>;
    margin: Coordinator<string>;
    fixedSize: string;
    radius: ThemeVariable<string>;
    fontSize: string;
    disabledOpacity: number;
    transition: string;
};

type PopoverProps = {
    radius: string;
    fontSize: ThemeVariable<string>;
    headerPadding: ThemeVariable<Coordinator<string>>;
    bodyPadding: ThemeVariable<Coordinator<string>>;
};

/** @format */

interface ThemeProps {
    colors: ColorsProps;
    button: ButtonProps;
    variant: VariantElProps;
    tooltip: TooltipProps$1;
    form: FormProps;
    typography: TypographyProps;
    fontSizes: FontSizeProps;
    breakpoint: BreakPointsProps;
    grid: GridProps;
    overlay: overlayProps;
    zIndex: ZIndexProps;
    popover: PopoverProps;
    pagination: Pagination;
}

interface BoxProps extends React.HTMLAttributes<HTMLDivElement>, DefaultProps {
    $withEffect?: boolean;
    $clickable?: boolean;
    $row?: boolean;
    $column?: boolean;
    $variant?: Variant;
    $shape?: Shape;
    $withBorder?: boolean;
    $flex?: boolean;
}

declare const BoxEl: styled_components.IStyledComponent<"web", "div", BoxProps, never>;
declare const Box: React__default.ForwardRefExoticComponent<BoxProps & React__default.RefAttributes<any>>;

type FlexProps = {
    $fullSize?: boolean;
};

declare const Flex: styled_components.IStyledComponent<"web", React$1.ForwardRefExoticComponent<BoxProps & React$1.RefAttributes<any>>, Omit<{}, "as"> & FlexProps, never>;

type InputIconProps = {
    $type: "left" | "right";
    $shape?: Shape;
    $size?: Size;
    $disabled?: boolean;
};
interface InputElProps extends React.InputHTMLAttributes<HTMLInputElement> {
    $fill?: boolean;
    $size?: Size;
    $variant?: Variant;
    $disabled?: boolean;
    $inputElement?: boolean;
}
interface InputProps extends InputElProps {
    $variant?: Variant;
    $fill?: boolean;
    $withBorder?: boolean;
    $shape?: Shape;
    $size?: Size;
    $error?: string;
    $hint?: string;
    $disabled?: boolean;
    $prefix?: React.ReactNode;
    $suffix?: React.ReactNode;
    $prefixProps?: JSXElementProps;
    $suffixProps?: JSXElementProps;
    $containerProps?: DefaultProps;
    $placeholder?: string;
    $withEffect?: boolean;
    $withShadow?: boolean;
    $withGradient?: boolean;
}
interface InputContainerProps extends DefaultProps {
    $variant?: Variant;
    $fill?: boolean;
    $withBorder?: boolean;
    $shape?: Shape;
    $size?: Size;
    $disabled?: boolean;
    $withShadow?: boolean;
    $withGradient?: boolean;
    $error?: string;
}

declare const Input: React__default.ForwardRefExoticComponent<InputProps & React__default.RefAttributes<any>>;

type LoaderProps$1 = {
    variant?: Variant;
    size?: "small" | "default" | "large";
};
declare const SimpleLoader: styled_components.IStyledComponent<"web", React$1.ForwardRefExoticComponent<BoxProps & React$1.RefAttributes<any>>, LoaderProps$1, never>;

type LoaderProps = {
    variant?: Variant;
    size?: "small" | "default" | "large";
};

type SvgProps = {
    viewBox: string;
    iconSize?: string;
    fill?: string;
    stroke?: string;
};

interface IconElementProps {
}

type TransitionProps = {
    children: JSX.Element;
    $status: boolean;
    $display?: boolean;
    $value?: Value;
    $beforeShow?: () => Promise<void>;
    $beforeHide?: () => Promise<void>;
    $show?: (el: HTMLElement) => Promise<void>;
    $hide?: (el: HTMLElement) => Promise<void>;
    $afterShow?: () => void;
    $afterHide?: () => void;
    $type?: string;
    $duration?: number;
};

declare const SlideTransition: React__default.FC<TransitionProps>;

interface State {
    display: boolean;
}
declare class TransitionEl extends React__default.Component<TransitionProps, State> {
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

type ArrowProps = {
    zIndex: string;
};

declare const ArrowElement: styled_components.IStyledComponent<"web", "div", ArrowProps, never>;

type CopyToClipboardProps = {
    children: React.ReactChild;
    textToCopy: string;
    onCopy?: (text: string, result: boolean) => void;
    options?: Options | undefined;
    showNotifica?: boolean;
    notificationText?: string;
} & Partial<DefaultProps>;

declare const CopyToClipboard: React__default.FC<CopyToClipboardProps>;

interface TooltipProps extends DefaultProps {
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
interface TProps extends DefaultProps {
    $variant: string;
    arrow: string;
    $size: Size;
}

declare const Tooltip: React__default.FC<TooltipProps>;

declare const TooltipElement: styled_components.IStyledComponent<"web", "div", TProps, never>;

interface FixedBoxOnRef {
    setPosition: () => void;
}
interface FixedContainerProps {
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

declare const FixedContainer: React__default.FC<FixedContainerProps>;

export { ArrowElement, ArrowProps, Box, BoxEl, BoxProps, Button, CSSHelper, ColorHelper, ColorObject, Coordinator, CopyToClipboard, CopyToClipboardProps, DOMHelper, DefaultProps, DefaultValuesProps, ElementPropValueMethod, FixedContainer, Flex, FlexProps, Grid, IconElementProps, Input, InputContainerProps, InputElProps, InputIconProps, InputProps, JSXElementProps, LoaderProps, SetValue, Shape, SimpleLoader, Size, SizeStrictProps, SlideTransition, SvgProps, TProps, ThemeProps, ThemeVariable, Tooltip, TooltipAttributes, TooltipElement, TooltipPositionResult, TooltipProps, TransitionEl, TypeOptions, TypographySize, Value, Variant, VariantOptions, WaveEffectProps, colors, defaultProps, defaultValues, theme, useCloseOnClickAway };
