import React from "react";
import AudioPlayerMindfullness from "../../components/Components-meditazione/AudioPlayerMindfullness";
import { useNavigate } from "react-router-dom";

const tracks = [
  {
    src: "../../../public/mp3/Pioggia.mp3",
    image: "../../../public/Images/pioggia.jpg",
    title: "Pioggia",
  },
  {
    src: "../../../public/mp3/Ruscello.mp3",
    image: "../../../public/Images/ruscello.jpg",
    title: "Ruscello",
  },

  //aggiungere altre tracce nell'array tracks
];

export default function Mindfullness() {
  const navigate = useNavigate();
  return (
    <div className="flex absolute flex-row w-full h-screen bg-gradient-to-b from-[#205f72] to-[#A1C877] overflow-hidden">
      <div>
        <AudioPlayerMindfullness tracks={tracks} />
      </div>
      <div>
        <button
          className="w-full absolute bottom-20 left-1/4 max-w-[200px] bg-[#205f72] text-white text-2xl py-2 px-6 rounded-lg transition-colors duration-100 hover:bg-[#A1C877]"
          onClick={() => {
            console.log("Navigating to/");
            navigate("/Meditazione");
            navigate("/Meditazione");
          }}
        >
          Meditazione
        </button>
      </div>
    </div>
  );
}
