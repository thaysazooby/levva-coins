import { BrowserRouter } from "react-router-dom"

import { ThemeProvider } from "styled-components"

import { Router } from "./Router"

import { defaultTheme } from "./styles/defaultTheme";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    
    <GlobalStyle />
   </ThemeProvider>
  );
}