// .storybook/preview.js
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "../src";
const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size:20px
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      lightTheme: theme,
      // darkTheme: theme("dark"),
    },
    defaultTheme: "lightTheme",
    Provider: ThemeProvider,
    GlobalStyles, // Adds your GlobalStyle component to all stories
  }),
];
