import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router";
import {StyledEngineProvider} from "@mui/material";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <StyledEngineProvider>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </StyledEngineProvider>
  </StrictMode>,
)
