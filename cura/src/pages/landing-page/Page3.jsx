import React from "react";

const MeditazioneMindfullness = () => {
    return (
        <div className="min-h-screen bg-[#A1C877] flex flex-col items-center justify-center p-6">
             <img 
                src="../../assets/Images/mascotte_2.PNG" 
                alt="mascotte" 
                className="absolute top-1 w-180 h-100"
            />
              <img 
                src="../../assets/Images/candele-1.png" 
                alt="candele-1" 
                className="absolute mt-70 left-20 w-180 h-100"
            />
            <div className="flex flex-col items-center text-center">
                <h1 className="absolute top-5 right-40 mt-10 text-[#23687D] text-9xl font-bold">03</h1>
                <h2 className="absolute top-5 right-20 text-[#23687D] text-5xl mt-50 max-w-lg break-words text-right w-[420px] py-4 ">MEDITAZIONE & MINDFULLNESS</h2>
                <p className="absolute top-10 right-20 mt-80 text-[#23687D] text-2xl text-right max-w-lg ">
                Scopri la nostra sezione dedicata alla meditazione mindfulness e al sonno. Troverai tracce audio pensate per aiutarti a vivere con serenità e migliorare la qualità del sonno. Queste meditazioni ti guideranno verso un maggiore benessere, riducendo lo stress e favorendo un riposo profondo.
                </p>
            </div>
        </div>
    );
};

export default MeditazioneMindfullness;
