import { RouterProvider } from "react-router-dom"

import { ThemeProvider } from "styled-components"

import { router } from "./Router"

import { defaultTheme } from "./styles/defaultTheme";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
    <RouterProvider router={router} />
    
    <GlobalStyle />
   </ThemeProvider>
  );
}