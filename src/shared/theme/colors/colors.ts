import { ColorsProps } from "./Colors.props";

export const colors: ColorsProps = {
  primary: {
    default: "#4C6FFF",
    light: "#7895FF",
    dark: "#3754DB",
    gradient: "linear-gradient(225deg, #D665FF 0%, #4C6FFF 100%)",
  },
  secondary: {
    default: "#E4ECF7",
    light: "#EBF2FA",
    dark: "#A6B7D4",
    gradient: "linear-gradient(225deg, #F1F1F5 0%, #E4ECF7 100%)",
  },
  white: {
    default: "#FFFFFF",
    translucent: "",
  },
  success: {
    default: "#66CB9F",
    light: "#8CDFB3",
    dark: "#4AAE8C",
    gradient: "linear-gradient(225deg, #67E9F1 0%, #24E795 100%)",
  },
  danger: {
    default: "#F16063",
    light: "#F68E87",
    dark: "#CF4655",
    gradient: "linear-gradient(225deg, #FFC656 0%, #F16063 100%)",
  },
  warning: {
    default: "#F7936F",
    light: "#FAB592",
    dark: "#D46A51",
    gradient: "linear-gradient(225deg, #FFEF5E 0%, #F7936F 100%)",
  },
  dark: {
    default: "#16192C",
    light: "#505780",
    dark: "#101225",
    gradient: "linear-gradient(225deg, #29272E 0%, #27272E 100%)",
  },
  info: {
    default: "#68DBF2",
    light: "#8DEDF7",
    dark: "#A6B7D4",
    gradient: "linear-gradient(225deg, #FFEF5E 0%, #F7936F 100%)",
  },
  gray: {
    gray50: "#FAFAFA",
    gray100: "#F7FAFC",
    gray200: "#EDF2F7",
    gray300: "#E2E8F0",
    gray400: "#CBD5E0",
    gray500: "#A0AEC0",
    gray600: "#718096",
    gray700: "#4A5568",
    gray800: "#2D3748",
    gray900: "#1A2022",
  },
  text: {
    body: {
      light: "#425466",
      dark: "#F2F2F2",
      muted: "#718096",
    },
    heading: {
      light: "#27272E",
      dark: "#FFFFFF",
    },
  },
  border: {
    light: "#EDF2F7",
    dark: "#16192C",
  },
  input: {
    default: {
      border: "#E7E7E7",
      background: "#FFFFFF",
      placeholder: "#B5B5BD",
      text: "#494949",
    },
    active: {
      border: "#FFFFFF",
      background: "#FFFFFF",
      placeholder: "#B5B5BD",
    },
    muted: {
      background: "#EDF2F7",
      placeholder: "#7A828A",
    },
  },
  defaultValues: {
    buttonBg: "#fff",
    // form
    FORM_RADIO_COLOR: "#fff",
    FORM_RADIO_BORDER_COLOR: "#dbdbdb",
    FORM_INPUT_BG_COLOR: "#fff",
    FORM_INPUT_BORDER_COLOR: "#dbdbdb",
    FORM_DISABLED_BG_COLOR: "#f2f2f2",
    FORM_INPUT_PLACEHOLDER_COLOR: "#b1bbc4",
    FORM_INPUT_DISABLED_BACKGROUND: "#f2f2f2",
  },
};
