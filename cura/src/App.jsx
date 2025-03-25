import { Hero } from "./components/Hero/Hero";
import React, { useState } from "react";
import CuraThemeProvider from "./theme/ThemeProvider";
import { createAppTheme } from "./theme/theme";
import { Box } from "@mui/material";
import { SignUp } from "./components/SignUp/SignUp";
import { Navbar } from "./components/Navbar/Navbar";
<<<<<<< HEAD
import { Routes } from "react-router";
import SezioneQuiz from "./components/Sezione-Quiz/Sezione-Quiz";
=======
import { Route, Routes } from "react-router";
import TeamPage from "./components/Team/TeamPage";
>>>>>>> f9b288146ffbe7acd83c80c5c39d0a06954c4a0e

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
<<<<<<< HEAD
          <Route path="Login"/>
          <Route/>
          <Route path="/Quiz" element={<SezioneQuiz/>} />
          <Route/>
=======
          <Route path="Login" />
          <Route path="team" element={<TeamPage />} />
          <Route />
          <Route />
>>>>>>> f9b288146ffbe7acd83c80c5c39d0a06954c4a0e
        </Routes>
      </Box>
    </CuraThemeProvider>
  );
}

export default App;
