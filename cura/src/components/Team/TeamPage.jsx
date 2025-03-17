import React, { useState } from "react";

export default function TeamPage() {
  const teamMembers = [
    // Crea l'array di oggetti con le informazioni dei membri del team
    {
      id: 1,
      name: "Salim Znaidi",
      image: "path/to/salim.png",
      description: "descrizione di Salim",
    },
    {
      id: 2,
      name: "Giuseppe di Loreto",
      image: "path/to/giuseppe.png",
      description: "descrizione di Giuseppe",
    },
    {
      id: 3,
      name: "Andrea Seidita",
      image: "path/to/andrea.png",
      description: "descrizione di Andrea",
    },
    {
      id: 4,
      name: "Christian Bovensi",
      image: "path/to/christian.png",
      description: "descrizione di Christian",
    },
    {
      id: 5,
      name: "Dario Scalia",
      image: "path/to/dario.png",
      description: "descrizione di Dario",
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null); // Usa selectedMember in modo coerente

  return (
    <div className="team-page bg-[#A1C877] h-screen flex justify-center items-center">
      <div className="grid grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="team-member bg-gradient from-blue-400 via-green-500 to-yellow-500 p-4 rounded-2x1 cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => setSelectedMember(member)} // Aggiorna lo stato qui
          >
            <div className="member-image overflow-hidden relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-white absolute -top-8 left-1/2 transform -translate-x-1/2"
              />
            </div>
            <h3 className="text-center text-xl mt-16 text-white">
              {member.name}
            </h3>
            {selectedMember?.id === member.id && ( // Usa selectedMember qui
              <p className="mt-2 text-center text-white">
                {member.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
