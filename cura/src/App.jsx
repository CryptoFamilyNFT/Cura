import { Hero } from "./components/Hero/Hero";
import CuraThemeProvider from "./theme/ThemeProvider";
import { Box } from "@mui/material";
import { SignUp } from "./components/SignUp/SignUp";
import { Navbar } from "./components/Navbar/Navbar";
import SezioneQuiz from "./components/Sezione-Quiz/Sezione-Quiz";
import { Route, Routes } from "react-router";
import TeamPage from "./components/Team/TeamPage";

function App() {
  return (
    <Routes>
      <Route path="Login" />
      <Route path="Quiz" element={<SezioneQuiz />} />
      <Route path="team" element={<TeamPage />} />

    </Routes >

  );
}

export default App;
