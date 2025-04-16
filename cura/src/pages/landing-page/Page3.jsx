import React from "react";

const MeditazioneMindfullness = () => {
  return (
    <div className="min-h-screen bg-[#A1C877] flex flex-col md:block p-6 relative overflow-hidden">
      
      <img
        src="../../../public/mascotte_2.PNG"
        alt="mascotte"
        className="w-40 h-auto self-center mb-4
                   md:absolute md:top-1 md:right-150 md:w-90 md:h-80 md:rotate-8 md:mb-0"
      />

      <h1
        className="text-[#23687D] text-5xl sm:text-7xl font-bold text-center
                   md:absolute md:top-5 md:right-40 md:mt-10 md:text-9xl md:text-right"
      >
        03
      </h1>

      <h2
        className="text-[#23687D] text-2xl sm:text-4xl font-semibold text-center mt-4
                   md:absolute md:top-5 md:right-20 md:mt-50 md:text-5xl md:max-w-lg md:text-right md:w-[420px] md:py-4"
      >
        MEDITAZIONE & MINDFULLNESS
      </h2>

      <p
        className="text-[#23687D] text-base sm:text-lg text-center mt-4 px-4
                   md:absolute md:top-10 md:right-20 md:mt-80 md:text-2xl md:max-w-lg md:text-right"
      >
        Scopri la nostra sezione dedicata alla meditazione mindfulness e al sonno. Troverai tracce audio pensate per aiutarti a vivere con serenità e migliorare la qualità del sonno. Queste meditazioni ti guideranno verso un maggiore benessere, riducendo lo stress e favorendo un riposo profondo.
      </p>

      <img
        src="../../../public/candele-1.png"
        alt="candele-1"
        className="w-40 h-auto mt-8 mx-auto
             md:absolute md:bottom-4 md:left-20 md:w-150 md:h-auto"
      />
    </div>
  );
};

export default MeditazioneMindfullness;
