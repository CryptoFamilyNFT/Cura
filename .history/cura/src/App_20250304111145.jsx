import { Hero } from './components/Hero/Hero';
import React, { useState } from 'react';
import CuraThemeProvider from './theme/ThemeProvider';
import { createAppTheme } from './theme/theme';
import { Box, Container } from '@mui/material';
import { SignUp } from './components/SignUp/SignUp';

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
        background: theme.palette.mode === 'light' ? '#f4f7e1' : '#1e1e1e',
        height: '100vh',
        width: '100vw',
      })}>
                <SignUp/>
        <Hero handleTheme={handleThemeChange} />
      </Box>
    </CuraThemeProvider>
  )
}

export default App;