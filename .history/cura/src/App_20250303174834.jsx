/* eslint-disable no-unused-vars */

import './App.css';
import { Hero } from './components/Hero/Hero';
import React, { useContext, useState } from 'react';
import CuraThemeProvider from './theme/ThemeProvider';
import { theme, darkTheme } from './theme/theme';


function App() {
  const { currentTheme, setTheme } = useState(theme);

  const handleThemeChange = () => {
    if (currentTheme === theme) {
      setTheme(darkTheme)
    }
    else {
      setTheme(theme)
    }
  }

  return (
    <div>
        <Hero handleTheme={handleThemeChange} />
    </div>
  )
}

export default App
