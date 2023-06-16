export interface FontWeights {
  regular: number;
  medium: number;
  bold: number;
}

export type FontSize = keyof FontSizeProps;
export interface FontSizeProps {
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
