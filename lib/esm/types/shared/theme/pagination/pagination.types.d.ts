import { Coordinator, ThemeVariable } from "../../helpers";
export type Pagination = {
    padding: Coordinator<string>;
    margin: Coordinator<string>;
    fixedSize: string;
    radius: ThemeVariable<string>;
    fontSize: string;
    disabledOpacity: number;
    transition: string;
};
