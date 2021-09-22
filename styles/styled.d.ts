import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      defaultColor: string;
      defaultOppositeColor: string;
      primary: string;
      lightBlue: string;
      borderBlue: string;
      blue: string;
      bg: string;
      landingText: string;
      landingEmphasisText?: string;
    };
  }
}
