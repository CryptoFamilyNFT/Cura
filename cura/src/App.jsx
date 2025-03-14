import { Hero } from './components/Hero/Hero';
import React, { useState } from 'react';
import CuraThemeProvider from './theme/ThemeProvider';
import { createAppTheme } from './theme/theme';
import { Box, Container } from '@mui/material';
import { SignUp } from './components/SignUp/SignUp';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  const [currentTheme, setTheme] = useState(createAppTheme('light'));

  const handleThemeChange = () => {
    setTheme((prevTheme) =>
      createAppTheme(prevTheme.palette.mode === 'light' ? 'dark' : 'light')
    );

    console.log(currentTheme);
  }


  return (
    <div>
      <Navbar handleTheme={handleThemeChange} />
      <div className='bg-amber-200 w-full h-full flex items-center content-center flex-col gap-10'>
        <SignUp/>
        <Hero handleTheme={handleThemeChange} />
      </div>
    </div>
  )
}

export default App;