import { BrowserRouter } from "react-router-dom";
import "@mantine/core/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";
import { standardTheme } from "./Style/Theme.js";
import { MantineProvider } from "@mantine/core";
import { AuthProvider } from "./Context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={standardTheme}>
        <MantineProvider defaultColorScheme="light">
          <AuthProvider>
            <App />
          </AuthProvider>
        </MantineProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
