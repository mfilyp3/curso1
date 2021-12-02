import { ThemeProvider } from "styled-components";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { List } from "./pages/List";
import { GlobalStyle } from "./styles/global";
import dark from "./styles/themes/dark";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Layout>
        <List />
      </Layout>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
