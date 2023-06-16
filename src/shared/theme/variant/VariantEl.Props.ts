export interface VariantElProps {
  main: string;
  font?: string;
  dark?: string;
  darker?: string;
  darkest?: string;
  light?: string;
  lighter?: string;
  lightest?: string;
  shadow?: string;

  //components
  /**button */
  button?: {
    background?: string;
    placeholder?: string;
    placeholderFill?: string;
  };

  // waveEffect
  waveEffect?: {
    color?: string;
  };
  //form
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
