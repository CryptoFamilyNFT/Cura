import { Hero } from './components/Hero/Hero';
import React, { useState } from 'react';
import CuraThemeProvider from './theme/ThemeProvider';
import { createAppTheme } from './theme/theme';
import { Box, Container } from '@mui/material';

function App() {
  const [currentTheme, setTheme] = useState(createAppTheme('light'));

  const handleThemeChange = () => {
    setTheme((prevTheme) =>
      createAppTheme(prevTheme.palette.mode === 'light' ? 'dark' : 'light')
    );

    console.log(currentTheme);
  }


  return (
    <CuraThemeProvider theme={currentTheme}>
      <Box sx={(theme) => ({
        background: theme.palette.mode === 'light' ? '#f4f7e1' : 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        height: '100vh',
        width: '100vw',
      })}>
        <Hero handleTheme={handleThemeChange} />
      </Box>
    </CuraThemeProvider>
  )
}

export default App;