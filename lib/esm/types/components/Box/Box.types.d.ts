/// <reference types="react" />
import { DefaultProps, Shape, Variant } from "../../shared";
export interface BoxProps extends React.HTMLAttributes<HTMLDivElement>, DefaultProps {
    $withEffect?: boolean;
    $clickable?: boolean;
    $row?: boolean;
    $column?: boolean;
    $variant?: Variant;
    $shape?: Shape;
    $withBorder?: boolean;
    $flex?: boolean;
}
