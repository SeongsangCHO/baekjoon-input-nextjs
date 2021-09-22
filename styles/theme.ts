import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    defaultColor: "black",
    defaultOppositeColor: "white",
    primary: "#162B74",
    lightBlue: "#8FAFFF",
    borderBlue: "#3070CF",
    blue: "#3B78FF",
    bg: "#162B74",
    landingText: "white",
    landingEmphasisText: "#3C79FF",
  },
};

const lightTheme: DefaultTheme = {
  colors: {
    defaultColor: "white",
    defaultOppositeColor: "black",
    primary: "#162B74",
    lightBlue: "#8FAFFF",
    borderBlue: "#3070CF",
    blue: "#3B78FF",
    bg: "white",
    landingText: "#000",
    landingEmphasisText: "#3C79FF",
  },
};

export { theme, lightTheme };
