import { PropsWithChildren } from "react";
import React from "react";
import { DefaultProps, TypographySize, Variant } from "../../shared";
export interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement>, Omit<DefaultProps, "color"> {
    $size?: TypographySize;
    $variant?: Variant;
    $onClick?: any;
    $onCopy?: any;
    $clipboardText?: string;
    $tooltipId?: string;
    $tooltipText?: string;
    $capitalizeFirstLetter?: boolean;
    $ellipsis?: boolean;
}
export declare const Typography: ({ $tooltipId, $tooltipText, $onCopy, $clipboardText, $capitalizeFirstLetter, children, ...props }: PropsWithChildren<TypographyProps>) => React.JSX.Element;
