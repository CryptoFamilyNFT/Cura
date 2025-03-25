import { Hero } from "./components/Hero/Hero";
import React, { useState } from "react";
import CuraThemeProvider from "./theme/ThemeProvider";
import { createAppTheme } from "./theme/theme";
import { Box } from "@mui/material";
import { SignUp } from "./components/SignUp/SignUp";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes } from "react-router";
import SezioneQuiz from "./components/Sezione-Quiz/Sezione-Quiz";

function App() {
  const [currentTheme, setTheme] = useState(createAppTheme("light"));

  const handleThemeChange = () => {
    setTheme((prevTheme) =>
      createAppTheme(prevTheme.palette.mode === "light" ? "dark" : "light")
    );

    console.log(currentTheme);
  };

  return (
    <CuraThemeProvider theme={currentTheme}>
      <Navbar handleTheme={handleThemeChange} />
      <Box
        sx={(theme) => ({
          background: theme.palette.mode === "light" ? "#f4f7e1" : "#1e1e1e",
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 10,
        })}
      >
        <SignUp />
        <Hero handleTheme={handleThemeChange} />
        <Routes>
          <Route path="Login"/>
          <Route/>
          <Route path="/Quiz" element={<SezioneQuiz/>} />
          <Route/>
        </Routes>
      </Box>
    </CuraThemeProvider>
  );
}

export default App;
