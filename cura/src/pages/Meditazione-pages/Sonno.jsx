import React from "react";
import AudioPlayerSonno from "../../components/Components-meditazione/AudioPlayerSonno";
import { useNavigate } from "react-router-dom";
import ScenaMeditazione from "../../components/Components-meditazione/ScenaMeditazione";

const tracks = [
  {
    src: "../../public/mp3/Pioggia.mp3",
    image: "../../../public/Images/pioggia.jpg",
    title: "Pioggia",
  },
  {
    src: "../../public/mp3/Ruscello.mp3",
    image: "../../../public/Images/ruscello.jpg",
    title: "Ruscello",
  },

  //aggiungere altre tracce nell'array tracks
];

export default function Sonno() {
  const navigate = useNavigate();
  return (
    <div className="flex absolute flex-row w-full h-screen bg-gradient-to-b from-[#205f72] to-[#A1C877] overflow-hidden">
      {/* Colonna sinistra */}
      <div className=" w-1/2 h-screen">
        <ScenaMeditazione modelPath="https://drive.google.com/uc?export=download&id=1H7rqHKduXVbhoB_u_xBJQGQHf3hRcUKH" />
        {/* qui passo modello sonno */}
      </div>
      {/* Colonna sinistra */}
      <div className="flex absolute  h-full flex-col  w-1/2 p-4">
        <button
          className="w-full absolute bottom-20 left-1/3 max-w-[200px] bg-[#205f72] text-white text-2xl py-2 px-6 rounded-lg transition-colors duration-100 hover:bg-[#A1C877]"
          onClick={() => {
            console.log("Navigating to/");
            navigate("/Meditazione");
            navigate("/Meditazione");
          }}
        >
          Meditazione
        </button>
      </div>

      {/* Colonna destra */}
      <div className="flex h-auto w-1/2 p-4">
        <AudioPlayerSonno tracks={tracks} />
      </div>
    </div>
  );
}
