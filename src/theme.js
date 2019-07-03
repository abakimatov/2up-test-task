import { createGlobalStyle, css } from 'styled-components';
import styledNormalize from 'styled-normalize';

const globalStyle = css`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    font-family: -apple-system, sans-serif;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${globalStyle};
  ${styledNormalize};
`;
