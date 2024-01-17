import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h2>Titulo</h2>

      <GlobalStyle />
    </ThemeProvider>
  )
}
