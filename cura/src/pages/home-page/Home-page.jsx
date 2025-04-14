import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainSection from "./pages/home-page/MainSection";
//ricordarsi di importare le varie pagine delle varie sezioni

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSection />} />
        {/* anche qui aggiungere le rotte */}
      </Routes>
    </Router>
  );
}
