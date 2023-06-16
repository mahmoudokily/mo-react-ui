import { Coordinator, ThemeVariable } from "../../helpers";

export interface ButtonProps {
  fixedSize: ThemeVariable<string>;
  padding: ThemeVariable<Coordinator<string> & { xHalf: string }>;
  radius: ThemeVariable<string>;
  fontSize: ThemeVariable<string>;
  disabledOpacity?: number;
  transition?: string;
}
