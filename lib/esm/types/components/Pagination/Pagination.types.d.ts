import { ChangeEvent } from "react";
import { Shape, Variant } from "../../shared";
export type PaginationProps = {
    total: number;
    limit?: number;
    page: number;
    onPageChange: (e: ChangeEvent<unknown>, page: number) => void;
    hideNextButton?: boolean;
    hidePrevButton?: boolean;
    hideFirstButton?: boolean;
    hideLastButton?: boolean;
    $shape?: Shape;
    $fixedSize?: boolean;
    $fill?: boolean;
    $variant?: Variant;
    maxPage?: number;
    hideLimitOptions?: boolean;
};
export type PaginationContainerProps = {
    $shape?: Shape;
    $fixedSize?: boolean;
    $fill?: boolean;
    $variant?: Variant;
    $active?: boolean;
};
