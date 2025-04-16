import React, { useState } from "react";
import cloud from "../../../public/Images/cloud2.png";
import albero from "../../../public/Images/albero.png";
import arrowSvg from "../../../public/Images/right-arrow-svgrepo-com.svg";

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Salim Znaidi",
      image: "../../../public/Images/salim.png",
    },
    {
      id: 2,
      name: "Giuseppe di Loreto",
      image: "../../../public/Images/Giuseppe.png",
    },
    {
      id: 3,
      name: "Andrea Seidita",
      image: "../../../public/Images/Andrea.png",
    },
    {
      id: 4,
      name: "Cristian Bovenzi",
      image: "../../../public/Images/Cristian.png",
    },
    {
      id: 5,
      name: "Dario Scalia",
      image: "../../../public/Images/Dario.png",
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null); // Usa selectedMember in modo coerente
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMemberClick = (member) => {
    //event handler
    if (selectedMember?.id === member.id) {
      setSelectedMember(null); //rimuove la selezione se il membro è già selezionato
    } else {
      setSelectedMember(member); //selezion il nuovo membro
    }
  };

  return (
    <div className="team-page min-h-screen bg-[#A1C877] relative flex flex-col  items-center">
      <img
        src={cloud}
        alt="Nuvola"
        className="absolute left-0 top-0 w-[400px] h-[auto] z-10 pt-10 pl-20"
      />
      <h2 className="text-2xl md:text-3xl lg:text-5xl xl:text-8xl z-20 font-[Titan One] text-[#205F72] mb-8 mt-20 relative">
        Incontra il nostro team
      </h2>
      <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-300 z-20 px-4 font-[Comfortaa] text-[#205F72] mb-8 text-center relative">
        Ecco il fantastico team che ha reso possibile lo sviluppo di uno spazio
        in cui il tuo benessere è la priorità.
      </h3>
      <div className="flex flex-wrap justify-center gap-20 mt-10 relative z-20">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="team-member flex flex-col items-center  rounded-xl cursor-pointer transition-transform duration-300 hover:scale-130 relative"
            onClick={() => handleMemberClick(member)} // event handler per il click sull'immagine del Team member
          >
            <div className="member-image  bg-gradient-to-b from-[#205F72] to-[#A1C877] p-4 rounded-full w-62 h-62 flex justify-center items-center overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-62 h-62 object-cover rounded-xl"
              />
            </div>
            <h3 className="text-center text-xl mt-6 text-[#205F72] font-[Titan One]">
              {member.name}
            </h3>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center relative z-20">
        <div className="flex flex-col justify-center items-center gap-2">
          <button
            onClick={() => toggleDropdown()}
            className="cursor-pointer flex max-w-40 justify-between gap-2 items-center"
          >
            <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-400 z-20 px-4 font-[Titan One] text-[#205F72] mb-4 mt-6 text-center relative">
              Perché Cura?
            </div>
            <img
              className={`transform ease-in-out transition-transform duration-300 h-4 w-4 ${
                isDropdownOpen ? "rotate-0" : "rotate-90"
              }`}
              src={arrowSvg}
              alt=""
            />
          </button>
          <div
            className={`overflow-hidden  transition-all duration-300 w-full ${
              isDropdownOpen ? "max-h-[500px]" : "max-h-0"
            } mb-8`}
          >
            <div className="bg-[#205F72]  p-4 rounded-lg font-[Comfortaa] text-[#A1C877] w-full max-w-[800px] mx-auto h-auto ">
              Cura è uno spazio pensato per offrirti l'opportunità di prenderti
              cura di te stesso. In un mondo che corre veloce, troppo spesso
              dimentichiamo di fermarci e riflettere su noi stessi, sulla nostra
              salute mentale e sul nostro benessere. "Cura" è il luogo dove puoi
              porsi delle domande importanti, dove puoi chiederti come stai
              veramente e se sei in armonia con te stesso. È un invito a fare
              una pausa per ascoltarti, per osservare e comprendere se senti il
              bisogno di riequilibrarti. In questo spazio, la meditazione e la
              riflessione sono strumenti per ricercare un equilibrio interiore,
              per trovare quella serenità che troppo spesso ci sfugge nella
              frenesia della vita quotidiana. Cura non è solo un nome, ma
              un'azione: quella di mettersi al centro delle proprie priorità,
              senza trascurare il proprio benessere mentale, emozionale e
              fisico.
            </div>
          </div>
        </div>
      </div>
      {/* immegini di sfondo */}
      <div className="h-[80%] w-[30%] absolute bottom-0 right-0 z-0">
        <img src={albero} alt="albero" className="h-full object-contain" />
      </div>
    </div>
  );
}
