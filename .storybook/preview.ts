// .storybook/preview.js
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "../src";
import { withRouter } from "storybook-addon-react-router-v6";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size:20px
  }
  .arrow::after {
  content: "";
  display: inline-block;
  margin-left: 0.28em;
  vertical-align: 0.09em;
  border-top: 0.42em solid;
  border-right: 0.32em solid transparent;
  border-left: 0.32em solid transparent;
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
  withRouter,
];
