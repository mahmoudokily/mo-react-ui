import { Coordinator, ThemeVariable } from "../../helpers";
export type PopoverProps = {
    radius: string;
    fontSize: ThemeVariable<string>;
    headerPadding: ThemeVariable<Coordinator<string>>;
    bodyPadding: ThemeVariable<Coordinator<string>>;
};
