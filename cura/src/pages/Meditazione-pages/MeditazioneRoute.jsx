import React from "react";
import { Routes, Route } from "react-router-dom";
import MeditazioneHome from "./pages/MeditazioneHome";
import Sonno from "./pages/Sonno";
import Mindfullness from "./pages/Mindfullness";

export default function MeditazioneRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MeditazioneHome />} />
        <Route path="/sonno" element={<Sonno />} />
        <Route path="/mindfullness" element={<Mindfullness />} />
      </Routes>
    </>
  );
}
