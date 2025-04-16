import React from "react";
import AudioPlayerSonno from "../../components/Components-meditazione/AudioPlayerSonno.jsx";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

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

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col  items-start justify-center min-h-screen  bg-gradient-to-b from-[#205f72] to-[#A1C877] ">
      <div>
        <AudioPlayerSonno tracks={tracks} />
      </div>
      <div className="w-full p-4">
        <button
          className="w-200 h-fit  bg-[#205f72] text-white text-2xl py-2 px-6 rounded-lg transition-colors duration-100 hover:bg-[#A1C877] "
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
