import './App.css';
import { Hero } from './components/Hero/Hero';
import React, { useState } from 'react';
import CuraThemeProvider from './theme/ThemeProvider';
import { theme, darkTheme } from './theme/theme';

function App() {
  const [currentTheme, setTheme] = useState(theme);

  const handleThemeChange = () => {
    if (currentTheme === theme) {
      setTheme(darkTheme);
    } else {
      setTheme(theme);
    }
  }

  return (
    <CuraThemeProvider theme={currentTheme}>
      <Hero handleTheme={handleThemeChange} />
    </CuraThemeProvider>
  )
}

export default App;