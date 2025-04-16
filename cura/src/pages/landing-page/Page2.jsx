import React from "react";

const AssistentePersonale = () => {
    return (
        <div className="min-h-screen relative bg-gradient-to-r from-[#23687D] to-[#A1C877] flex flex-col items-center justify-center p-6">
              <img 
                src="../../../public/astratto-equilibrio-1.png" 
                alt="astratto-equilibrio-1" 
                className="absolute left-0 bottom-0"
            />
            <div className="flex flex-col items-center text-center">
                <h1 className="absolute right-15 mt-3 text-white text-9xl font-bold">02</h1>
                <h2 className="text-white text-5xl mt-60 max-w-lg break-words text-left w-full py-4">ASSISTENTE AI PERSONALE</h2>
                <p className="text-white text-2xl max-w-lg break-words text-left w-full py-4">
                    Al personale è sempre a tua disposizione, pronto a guidarti passo dopo passo.
                    Che tu stia cercando consigli pratici o supporto emotivo, troverai un assistente
                    dedicato che ti aiuterà a superare ogni sfida.
                </p>
            </div>
        </div>
    );
};

export default AssistentePersonale;
