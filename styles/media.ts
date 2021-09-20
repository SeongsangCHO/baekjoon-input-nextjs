import { css } from "styled-components";

interface ISize {
  [idx: string]: number;
}

const sizes: ISize = {
  mobile: 1080,
};
//몰겠음,,,,
// export default Object.keys(sizes).reduce((acc: any, label: string) => {
//   acc[label] = (...args: TemplateStringsArray) => css`
//     @media (max-width: ${sizes[label]}px) {
//       ${css(...args)};
//     }
//   `;
//   return acc;
// }, {} as Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: any[]) => string>);

const media = Object.keys(sizes).reduce(
  (acc, label) => {
    acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
      css`
        @media (max-width: ${sizes[label]}px) {
          ${css(literals, ...placeholders)};
        }
      `.join("");
    return acc;
  },
  {} as Record<
    keyof typeof sizes,
    (l: TemplateStringsArray, ...p: any[]) => string
  >,
);

export default media;
// ${({ theme }) => theme.tablet`
// grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
// `}

// theme.mobile``;

// const Styled = styled.div`
//  width: 100%;
// ${({ theme }) => theme.tablet`
// grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
// width: 90%;
// `}
// `;
