import dark from "./styles/themes/dark";
import { Routes } from "./routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Routes />

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
