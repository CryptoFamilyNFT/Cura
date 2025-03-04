/* eslint-disable no-unused-vars */

import { useTheme } from '@mui/material';
import './App.css';
import { Hero } from './components/Hero/Hero';
import React, { useContext, useState } from 'react';
import CuraThemeProvider from './theme/ThemeProvider';
import { theme, darkTheme } from './theme/theme';

const CustomThemeContex = React.createContext()

function App() {
  const { currentTheme, setTheme } = useState(theme)
  const isDark = Boolean(currentTheme === 'dark')

  const handleThemeChange = (event) => {
    const { checked } = event.target
    if (checked) {
      setTheme('dark')
    } else {
      setTheme('normal')
    }
  }

  return (
    <CuraThemeProvider theme={currentTheme}>
      <Hero handleTheme={handleThemeChange} />
    </CuraThemeProvider>
  )
}

export default App
