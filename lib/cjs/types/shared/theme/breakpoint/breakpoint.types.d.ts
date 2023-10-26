export interface BreakPointsProps {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
}
export type BreakPoint = keyof BreakPointsProps;
