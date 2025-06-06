import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from '@/components/theme-provider'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="job-portal-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);
