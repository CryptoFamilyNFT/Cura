import React, { useState } from "react";

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Salim Znaidi",
      image: "/public/salim.png",
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
    <div className="team-page bg-[#A1C877] h-screen flex flex-col justify-center items-center py-8">
      <h2 className="text-6xl font-[Titan One] text-[#205F72] mb-50">
        Incontra il nostro team
      </h2>
      {/* titolo */}
      <div className="flex flex-wrap justify-center gap-30">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="team-member flex flex-col items-center bg-[#A1C877] p-4 rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => setSelectedMember(member)} // event handler per il click sull'immagine del Team member
          >
            <div className="member-image overflow-hidden relative bg-gradient-to-b from-[#205F72] to-[#A1C877] p-4 rounded-full">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
            <h3 className="text-center text-xl mt-4 text-[#205F72]">
              {member.name}
            </h3>

            {selectedMember?.id === member.id && (
              <p className="mt-2 text-center text-[#205F72]">
                {member.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
