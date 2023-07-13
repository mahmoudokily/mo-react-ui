export interface ColorsProps {
    white: {
        default: string;
        translucent: string;
    };
    dark: {
        default: string;
        light: string;
        dark: string;
        gradient: string;
    };
    primary: {
        default: string;
        light: string;
        dark: string;
        gradient: string;
    };
    secondary: {
        default: string;
        light: string;
        dark: string;
        gradient: string;
    };
    success: {
        default: string;
        light: string;
        dark: string;
        gradient: string;
    };
    danger: {
        default: string;
        light: string;
        dark: string;
        gradient: string;
    };
    warning: {
        default: string;
        light: string;
        dark: string;
        gradient: string;
    };
    info: {
        default: string;
        light: string;
        dark: string;
        gradient: string;
    };
    gray: {
        gray50: string;
        gray100: string;
        gray200: string;
        gray300: string;
        gray400: string;
        gray500: string;
        gray600: string;
        gray700: string;
        gray800: string;
        gray900: string;
    };
    text: {
        body: {
            light: string;
            dark: string;
            muted: string;
        };
        heading: {
            light: string;
            dark: string;
        };
    };
    border: {
        light: string;
        dark: string;
    };
    input: {
        default: {
            border: string;
            background: string;
            placeholder: string;
            text: string;
        };
        active: {
            border: string;
            background: string;
            placeholder: string;
        };
        muted: {
            background: string;
            placeholder: string;
        };
    };
    defaultValues: {
        buttonBg: string;
        FORM_DISABLED_BG_COLOR: string;
        FORM_RADIO_BORDER_COLOR: string;
        FORM_INPUT_BG_COLOR: string;
        FORM_INPUT_BORDER_COLOR: string;
        FORM_INPUT_PLACEHOLDER_COLOR: string;
        FORM_RADIO_COLOR: string;
        FORM_INPUT_DISABLED_BACKGROUND: string;
    };
}
export type ColorProps = keyof ColorsProps;
