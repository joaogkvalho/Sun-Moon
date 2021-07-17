import { Header } from "./components/Header";
import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import GlobalStyle from "./styles/global";


export function App() {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <Header />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}
