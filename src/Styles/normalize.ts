import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
  :root,
  body {
    font-family: 'Space Mono', monospace, -apple-system, Arial, sans-serif;
    font-weight: 700;
    position: relative;
    padding: 0;
    margin: 0;
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    scroll-behavior: smooth;
  }

  html, body, #__next {
    height: 100%;
  }

  @supports (-webkit-touch-callout: none) {
    :root,
    body {
      min-height: -webkit-fill-available;
    }
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -webkit-tap-highlight: transparent;
    margin: 0;
    padding: 0;
    border: 0;
  }

  button,
  a {
    cursor: pointer;
    user-select: none;
  }

  a {
    text-decoration: none;
      color: inherit;
  }

  [disabled] {
    cursor: default;
  }

  hr {
    height: 1px;
    min-height: 1px;
    max-height: 1px;
    border: none;
    margin: 1rem 0;
    background-color: var(--stroke-color, rgba(0, 0, 0, 0.15));
  }
  hr.vertical {
    min-height: unset;
    max-height: unset;
    width: 1px;
    max-width: 1px;
    min-width: 1px;
    margin: 0 1rem;
  }
`