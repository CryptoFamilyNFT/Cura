import React from "react";
import AudioPlayerMindfullness from "../components/AudioPlayerMindfullness";
import { useNavigate } from "react-router-dom";

const tracks = [
  {
    src: "./Pioggia.mp3",
    image: "./pioggia.jpg",
    title: "Pioggia",
  },
  {
    src: "./Ruscello.mp3",
    image: "./ruscello.jpg",
    title: "Ruscello",
  },

  //aggiungere altre tracce nell'array tracks
];

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-[#205f72] to-[#A1C877]">
      <div>
        <AudioPlayerMindfullness tracks={tracks} />
      </div>
      <div className="absolute">
        <button
          className=" h-fit mt-60 mr-100 bg-[#205f72] text-white py-2 px-6 rounded-lg w-36"
          onClick={() => {
            console.log("Navigating to/");
            navigate("/");
          }}
        >
          Meditazione
        </button>
      </div>
    </div>
  );
}
