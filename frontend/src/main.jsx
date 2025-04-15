import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ThemeProvider } from "styled-components";
import { standardTheme } from "./Style/theme";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <MantineProvider defaultColorScheme="light">
        <App />
      </MantineProvider>
    </ThemeProvider>
  </StrictMode>
);
