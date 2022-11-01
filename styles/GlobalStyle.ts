import { createGlobalStyle } from "styled-components";
import theme from "./theme";

// destructured theme properties
const { colors, fonts, mediaQueries } = theme;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 100%;

    @media ${mediaQueries.desktopSmall} {
		  font-size: 87.5%;
    }
  }

  body {
	  font-family: ${fonts.roboto};
    line-height: 1;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    color: inherit;
    font-size: inherit;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
  }

  h1 {
    color: ${colors.scooter};
    font-size: 2.25rem;
    margin-bottom: 1rem;
  }

  button, 
  input, 
  textarea {
    font-family: ${fonts.roboto};
  }

  img,
  svg {
    border: 0;
    display: block;
    height: auto;
    max-width: 100%;
  }

  a {
    &:link,
    &:visited {
      text-decoration: none;
    }

    @media (hover) {
			&:hover,
			&:active,
			&:focus {
        outline: 0;
				text-decoration: underline;
			}
		}
  }

  ol,
  ul {
    line-height: 1.5;
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  audio,
  canvas,
  video {
    display: inline-block;
    max-width: 100%;
    zoom: 1;
  }
`;

export default GlobalStyle;
