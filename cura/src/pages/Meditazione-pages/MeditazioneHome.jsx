import React from "react";
import ScenaMeditazione from "../components/ScenaMeditazione";
import { Link, useNavigate } from "react-router-dom";

export default function MeditazioneHome() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#205f72] to-[#A1C877] pt-30">
      <ScenaMeditazione modelPath="./meditazioneVuota.glb" />

      {/* contenitore per i bottoni */}
      <div className=" absolute flex flex-col gap-5 space-x-5  pt-50">
        <button
          className="bg-[#205f72] text-white text-2xl py-2 px-6 rounded-lg w-200 transition-colors duration-100 hover:bg-[#A1C877]   "
          onClick={() => navigate("/mindfullness")}
        >
          Mindfullness
        </button>

        <button
          className="bg-[#205f72] text-white text-2xl py-2 px-6 rounded-lg w-200 transition-colors duration-100 hover:bg-[#A1C877]"
          onClick={() => navigate("/sonno")}
        >
          Sonno
        </button>
      </div>
    </div>
  );
}
