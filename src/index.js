import { StrictMode } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "/src/thems/default";
import ReactDOM from "react-dom";

import App from "/src/components/app/app";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
