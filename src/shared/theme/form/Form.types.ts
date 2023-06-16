import { Coordinator, ThemeVariable } from "../../helpers";

export interface FormProps {
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
