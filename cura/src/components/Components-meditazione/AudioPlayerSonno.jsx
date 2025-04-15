import React, { useEffect, useRef, useState } from "react";
import ScenaMeditazione from "./ScenaMeditazione";
import { PlayArrow, Pause, SkipPrevious, SkipNext } from "@mui/icons-material";
import "./app.css";

export default function AudioPlayerSonno({ tracks }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0); //state variable della traccia audio attuale
  const [isPlaying, setIsPlaying] = useState(false); //state variable traccia in riproduzione o meno
  const [currentTime, setCurrentTime] = useState(0); //state variable per il tempo corrente della traccia
  const [duration, setDuration] = useState(0); // state variable per la durata della traccia

  const audioRef = useRef(null); //riferimento per l'elemento audio
  const progressBarRef = useRef(null); //riferimento per la progress bar.

  const handleTimeUpdate = () => {
    //funzione per aggiornare la posizione della traccia
    const current = audioRef.current.currentTime;
    setCurrentTime(current);
    if (progressBarRef.current) {
      progressBarRef.current.value = (current / duration) * 100;
    }
  };

  // Funzione per gestire il cambiamento della barra di progresso
  const handleProgressBarChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime; // Aggiorna il tempo dell'audio
    setCurrentTime(newTime); // Aggiorna il tempo corrente nel state
  };

  useEffect(() => {
    //useeffect per aggiornare la durata quando cambia la traccia
    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current.duration);
      });
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [currentTrackIndex]);

  const togglePlayPause = () => {
    //funzione per riprodurre o mettere in pausa la traccia
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    // Funzione per saltare alla traccia successiva
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  const prevTrack = () => {
    // Funzione per tornare alla traccia precedente
    setCurrentTrackIndex(
      (prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length
    );
  };

  const handleTrackSelect = (index) => {
    setCurrentTrackIndex(index); //cambia la traccia selezionata
    setIsPlaying(true); //riproduce la traccia appena selezionata
  };

  return (
    <div className="flex justify-start items-start mt-20 max-h-screen w-fit">
      <div className="flex justify-start items-start">
        {
          <ScenaMeditazione modelPath="https://drive.google.com/uc?export=download&id=1txevq5Q4TDAK9IN0YMbRewRzOIs0lzO8" />
        }
      </div>{" "}
      {/* qui passo la scena meditazione sonno  */}
      <div className="w-1/3 flex-col">
        <div className="p-6 bg-[#c7c7c7] bg-opacity-80 backdrop-blur-md rounded-lg w-150 text-white">
          {/* Immagine di copertina della traccia */}
          <div className="flex justify-center mb-6">
            <img
              src={tracks[currentTrackIndex].image}
              alt="track"
              className=" h-60 object-cover rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300 mt-10"
            />
          </div>
          <audio ref={audioRef} src={tracks[currentTrackIndex].src} />

          {/* Barra di progresso */}
          <input
            type="range"
            ref={progressBarRef}
            min="0"
            max="100"
            value={
              isNaN((currentTime / duration) * 100)
                ? 0
                : (currentTime / duration) * 100
            }
            onChange={handleProgressBarChange}
            className="w-full h-0.5 rounded-lg mt-10 bg-[#b3b3b3] appearance-none "
          />

          <div className="flex justify-center items-center mb-4">
            {/* Bottone precedente */}
            <button
              onClick={prevTrack}
              className="prev-next-btn text-xl text-[#205f72] font-extrabold font-[Confortaa] w-12 h-12 flex items-center justify-center"
            >
              <SkipPrevious />
            </button>

            {/* Play/Pause */}
            <button
              onClick={togglePlayPause}
              className="text-xl mx-6 text-[#205f72]  w-12 h-12 flex items-center justify-center"
            >
              {isPlaying ? <Pause /> : <PlayArrow />}
            </button>

            {/* Bottone successivo */}
            <button
              onClick={nextTrack}
              className="prev-next-btn text-xl text-[#205f72] font-extrabold font-[Confortaa] w-12 h-12 flex items-center justify-center"
            >
              <SkipNext />
            </button>
          </div>

          <div className="flex justify-between text-xs text-[#205f72] mt-2">
            <span>{`${Math.floor(currentTime)}s`}</span>
            <span>{`${Math.floor(duration)}s`}</span>
          </div>
        </div>
        <div className="track-list mt-6 space-y-2 bg-[#c7c7c7] bg-opacity-80 backdrop-blur-md rounded-lg w-150 text-white">
          {tracks.map((track, index) => (
            <div
              key={index}
              className={`flex items-center p-2 cursor-pointer rounded-lg ${
                index === currentTrackIndex
                  ? " hover:bg-[#b3b3b3] text-[#205f72]"
                  : "hover:bg-[#b3b3b3] text-[#205f72]"
              }`}
              onClick={() => handleTrackSelect(index)}
            >
              {/* Immagine della traccia */}
              <img
                src={track.image}
                alt="track"
                className="w-12 h-12 object-cover rounded-lg mr-4" // Spazio tra immagine e titolo
              />
              {/* Linea di separazione tra immagine e titolo */}
              <div className="border-l border-[#205f72] h-8 mx-2"></div>
              {/* Titolo della traccia */}
              <span className="text-sm">{track.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
