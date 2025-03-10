import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { FileContextProvider } from "./context/FileContext.tsx";
import { PromptResponseContextProvider } from "./context/PromptContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <FileContextProvider>
        <PromptResponseContextProvider>
          {/* <LoadingScreen /> */}
          <App />
        </PromptResponseContextProvider>
      </FileContextProvider>
    </ThemeProvider>
  </StrictMode>
);
