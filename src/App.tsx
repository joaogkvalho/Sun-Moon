import { useState } from 'react'
import { Header } from "./components/Header";
import { ThemeProvider } from 'styled-components'

import { usePersistedState } from './hooks/usePersistedState';

import dark from './styles/themes/dark'
import light from './styles/themes/light'

import GlobalStyle from "./styles/global";


export function App() {
  const [theme, setTheme] = usePersistedState('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header toggleTheme={toggleTheme}/>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}
