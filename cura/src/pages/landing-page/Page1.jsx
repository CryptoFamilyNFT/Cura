import React from "react";

const Quizinterattivi = () => {
    return (
        <div className="min-h-screen w-auto relative bg-[#A1C877] flex flex-col items-center justify-center p-6">
            <img 
                src="../../../public/mascotte_2.PNG" 
                alt="mascotte" 
                className="absolute top-1 left-50 w-90 h-80 rotate-8"
            />
             <img 
                src="../../../public/Nuvole.png" 
                alt="nuvola" 
                className="absolute top-20 w-120 h-70"
            />
             <img 
                src="../../../public/albero.png" 
                alt="albero-1" 
                className="absolute right-1 bottom-0 w-100 h-175 "
            />
            <div className="flex flex-col w-screen items-center text-center">
                <h1 className="absolute top-10 left-15 text-[#23687D] text-9xl font-bold">01</h1>
                <h2 className="text-[#23687D] text-5xl mt-60 max-w-lg break-words text-right w-[420px] py-4 ">QUIZ INTERATTIVI PERSONALIZZATI </h2>
                <p className="text-[#23687D] text-2xl max-w-lg mt-4 w-full text-right -ml-23">
                Grazie all'analisi dell'AI, ogni quiz ti offre un percorso su misura per migliorare il tuo benessere. Rispondi alle domande, esplora i risultati e ricevi consigli pratici per una vita più serena e soddisfacente.
                </p>
            </div>
        </div>
    );
};

export default Quizinterattivi;
