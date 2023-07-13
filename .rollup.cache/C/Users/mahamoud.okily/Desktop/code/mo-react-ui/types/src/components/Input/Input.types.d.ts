/// <reference types="react" />
import { DefaultProps, JSXElementProps, Shape, Size, Variant } from "../../shared";
export type InputIconProps = {
    $type: "left" | "right";
    $shape?: Shape;
    $size?: Size;
    $disabled?: boolean;
};
export interface InputElProps extends React.InputHTMLAttributes<HTMLInputElement> {
    $fill?: boolean;
    $size?: Size;
    $variant?: Variant;
    $disabled?: boolean;
    $inputElement?: boolean;
}
export interface InputProps extends InputElProps {
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
export interface InputContainerProps extends DefaultProps {
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
