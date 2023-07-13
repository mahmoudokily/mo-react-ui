/// <reference path="../modules/global.d.d.ts" />
import React from "react";
import { Value } from "../../shared";
export interface CssTransitionProps {
    children: JSX.Element;
    $status?: boolean;
    $display?: boolean;
    $value?: Value;
    $className: string;
    $type?: string;
    $duration?: number;
    $showAnimation?: boolean;
    $hideAnimation?: boolean;
    $beforeShow?: () => Promise<void>;
    $beforeHide?: () => Promise<void>;
    $afterShow?: () => void;
    $afterHide?: () => void;
}
declare const CSSTransition: React.FC<CssTransitionProps>;
export default CSSTransition;
