/* eslint-disable no-unused-vars */

import { useTheme } from '@mui/material';
import './App.css';
import { Hero } from './components/Hero/Hero';
import React, { useContext } from 'react';

const CustomThemeContex = React.createContext()

function App() {
  const { currentTheme, setTheme } = useContext(CustomThemeContex)
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
    <>
      <Hero handleTheme={handleThemeChange} />
    </>
  )
}

export default App
