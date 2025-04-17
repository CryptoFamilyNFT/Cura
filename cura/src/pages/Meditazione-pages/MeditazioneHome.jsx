import React from "react";
import ScenaMeditazione from "../../components/Components-meditazione/ScenaMeditazione.jsx";
import { useNavigate } from "react-router";

export default function MeditazioneHome() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#205f72] to-[#A1C877] pt-30">
      <ScenaMeditazione modelPath="https://drive.google.com/uc?export=download&id=1H7rqHKduXVbhoB_u_xBJQGQHf3hRcUKH" />

      {/* contenitore per i bottoni */}
      <div className=" absolute flex flex-col gap-5 space-x-5  pt-50">
        <button
          className="bg-[#205f72] text-white text-2xl py-2 px-6 rounded-lg w-200 transition-colors duration-100 hover:bg-[#A1C877]   "
          onClick={() => navigate("/Meditazione/mindfullness")}
          onClick={() => navigate("/Meditazione/mindfullness")}
        >
          Mindfullness
        </button>

        <button
          className="bg-[#205f72] text-white text-2xl py-2 px-6 rounded-lg w-200 transition-colors duration-100 hover:bg-[#A1C877]"
          onClick={() => navigate("/Meditazione/sonno")}
          onClick={() => navigate("/Meditazione/sonno")}
        >
          Sonno
        </button>
      </div>
    </div>
  );
}
