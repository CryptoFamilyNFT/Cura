import React from "react";
import AudioPlayerMindfullness from "../../components/Components-meditazione/AudioPlayerMindfullness.jsx";
import { useNavigate } from "react-router";

const tracks = [
  {
    src: "../../assets/mp3/Pioggia.mp3",
    image: "../../../public/Images/pioggia.jpg",
    title: "Pioggia",
  },
  {
    src: "../../assets/mp3/Ruscello.mp3",
    image: "../../../public/Images/ruscello.jpg",
    title: "Ruscello",
  },

  //aggiungere altre tracce nell'array tracks
];

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-start items-start min-h-screen bg-gradient-to-b from-[#205f72] to-[#A1C877]">
      <div>
        <AudioPlayerMindfullness tracks={tracks} />
      </div>
      <div>
        <button
          className=" h-fit ml-60 bg-[#205f72] text-white text-2xl py-2 px-6 rounded-lg w-200 transition-colors duration-100 hover:bg-[#A1C877] "
          onClick={() => {
            console.log("Navigating to/");
            navigate("/Meditazione");
          }}
        >
          Meditazione
        </button>
      </div>
    </div>
  );
}
