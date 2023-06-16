import { ButtonProps } from "./Button.types";

export const button: ButtonProps = {
  fixedSize: {
    small: "22px",
    default: "32px",
    large: "40px",
  },
  padding: {
    small: {
      x: ".5rem",
      y: ".2rem",
      xHalf: ".2rem",
    },
    default: {
      x: "0.7rem",
      y: "0.2rem",
      xHalf: ".35rem",
    },
    large: {
      x: "1rem",
      y: ".4rem",
      xHalf: ".4rem",
    },
  },
  fontSize: {
    large: "1rem",
    small: "0.7rem",
    medium: "0.8rem",
  },
  radius: {
    default: "0.3rem",
    square: "0",
    rounded: "2rem",
    circle: "50%",
  },
  disabledOpacity: 0.7,
};
