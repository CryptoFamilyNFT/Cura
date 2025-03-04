import './App.css';
import { Hero } from './components/Hero/Hero';
import React, { useState } from 'react';
import CuraThemeProvider from './theme/ThemeProvider';
import { createAppTheme} from './theme/theme';

import './App.css';
import { Hero } from './components/Hero/Hero';
import React, { useState } from 'react';
import CuraThemeProvider from './theme/ThemeProvider';
import { createAppTheme } from './theme/theme';

function App() {
  const [currentTheme, setTheme] = useState(createAppTheme('light'));

  const handleThemeChange = () => {
    setTheme((prevTheme) => 
      createAppTheme(prevTheme.palette.mode === 'light' ? 'dark' : 'light')
    );
  };

  return (
    <CuraThemeProvider theme={currentTheme}>
      <Hero handleTheme={handleThemeChange} />
    </CuraThemeProvider>
  );
}

export default App;