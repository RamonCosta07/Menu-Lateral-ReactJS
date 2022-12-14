// CSS
import Header from "./components/Header";
import Menu from "./components/Menu";
import GlobalStyle from "./globals/style";
// Hooks
import { MainContextProvider } from "./contexts/MainContext";

function App() {
  return (
    <MainContextProvider>
      <GlobalStyle />
      <Header />
      <Menu />
    </MainContextProvider>
  );
}

export default App;
