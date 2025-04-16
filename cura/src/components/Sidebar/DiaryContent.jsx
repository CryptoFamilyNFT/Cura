import { useState } from "react";

export default function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [expandedNote, setExpandedNote] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [quizResult, setQuizResult] = useState(null);

  // Dati mock per i risultati dei quiz
  const quizResults = {
    1: {
      title: "Idratazione Giornaliera",
      completion: "Completato il 15/03/2023",
      tip: "Bere almeno 2 litri d'acqua al giorno aiuta a mantenere l'equilibrio idrico, migliora la concentrazione e favorisce l'eliminazione delle tossine. Prova ad aggiungere una fetta di limone per un extra di vitamina C!",
      benefit: "Migliora la pelle, aumenta l'energia e aiuta la digestione",
    },
    2: {
      title: "Pausa Attiva",
      completion: "Completato il 22/04/2023",
      tip: "Fai 5 minuti di stretching ogni ora se lavori seduto. Alzati e fai una breve camminata ogni 90 minuti per migliorare la circolazione e ridurre la tensione muscolare.",
      benefit: "Riduce il mal di schiena e migliora la postura",
    },
    3: {
      title: "Sonno Ristoratore",
      completion: "Completato il 05/05/2023",
      tip: "Cerca di dormire 7-8 ore per notte in una stanza fresca e buia. Evita schermi luminosi 1 ora prima di dormire e prova tecniche di rilassamento come la respirazione profonda.",
      benefit: "Migliora l'umore, la memoria e il sistema immunitario",
    },
    4: {
      title: "Alimentazione Consapevole",
      completion: "Completato il 12/06/2023",
      tip: "Mangia lentamente, masticando bene ogni boccone. Includi verdure in ogni pasto e varia i colori nella tua dieta per assicurarti un ampio spettro di nutrienti.",
      benefit: "Favorisce la digestione e l'assorbimento dei nutrienti",
    },
  };

  const handleQuizClick = (quizId) => {
    setQuizResult(quizResults[quizId]);
    setShowModal(true);
  };

  const addNote = () => {
    if (newNote.trim() !== "") {
      const timestamp = new Date().toLocaleString("it-IT", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setNotes([...notes, { text: newNote, timestamp }]);
      setNewNote("");
      setIsEditing(false);
    }
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
    if (isEditing && expandedNote === index) {
      setIsEditing(false);
      setNewNote("");
      setExpandedNote(null);
    }
  };

  const editNote = (index) => {
    setNewNote(notes[index].text);
    setIsEditing(true);
    setExpandedNote(index);
  };

  const saveEdit = () => {
    if (newNote.trim() !== "") {
      const updatedNotes = [...notes];
      updatedNotes[expandedNote].text = newNote;
      updatedNotes[expandedNote].timestamp = new Date().toLocaleString(
        "it-IT",
        {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }
      );
      setNotes(updatedNotes);
      setNewNote("");
      setIsEditing(false);
      setExpandedNote(null);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 w-full max-w-6xl mx-auto">
      {/* Diario */}
      <div className="bg-white/30 rounded-2xl w-full lg:w-3/5 p-6 shadow-xl backdrop-blur-md border border-white/20 transition-shadow h-[500px] flex flex-col">
        <div className="space-y-4">
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Scrivi una nuova nota..."
            className="w-full h-28 p-3 border border-gray-300 rounded-lg bg-white/90 focus:ring-2 focus:ring-[#23687D] outline-none shadow-sm resize-none placeholder:text-gray-500"
          />
          <button
            onClick={isEditing ? saveEdit : addNote}
            className={`w-full py-2.5 rounded-lg font-medium text-white transition duration-300 ${
              isEditing
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-[#23687D] hover:bg-[#1b505f]"
            }`}
          >
            {isEditing ? "Salva Modifica" : "Aggiungi Nota"}
          </button>
        </div>

        <div className="mt-4 pr-2 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-[#23687D]/50 scrollbar-track-transparent">
          {notes.length > 0 ? (
            notes.map((note, index) => (
              <div
                key={index}
                className="p-3 bg-white/60 rounded-lg shadow backdrop-blur-sm hover:shadow-lg mb-3"
              >
                <div className="flex flex-col">
                  {expandedNote === index ? (
                    <div className="max-h-64 overflow-y-auto">
                      <p className="text-gray-800 whitespace-pre-wrap break-words text-sm">
                        {note.text}
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-800 whitespace-pre-wrap break-words text-sm">
                      {note.text.length <= 100
                        ? note.text
                        : `${note.text.slice(0, 100)}...`}
                    </p>
                  )}
                  {note.text.length > 100 && (
                    <button
                      onClick={() =>
                        setExpandedNote(expandedNote === index ? null : index)
                      }
                      className="text-xs mt-1.5 text-[#23687D] hover:underline"
                    >
                      {expandedNote === index ? "Nascondi" : "Visualizza tutto"}
                    </button>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1.5">{note.timestamp}</p>
                <div className="flex justify-between mt-3 gap-2">
                  <button
                    onClick={() => editNote(index)}
                    className="flex-1 px-3 py-1.5 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition"
                  >
                    Modifica
                  </button>
                  <button
                    onClick={() => deleteNote(index)}
                    className="flex-1 px-3 py-1.5 text-sm border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition"
                  >
                    Elimina
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-600 text-sm">Nessuna nota disponibile.</p>
            </div>
          )}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white/30 rounded-2xl w-full lg:w-2/5 p-6 shadow-xl backdrop-blur-md border border-white/20 transition-shadow h-[500px]">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Consigli Benessere
        </h2>
        <div className="space-y-3 h-[calc(100%-40px)] overflow-y-auto">
          {[1, 2, 3, 4].map((n) => (
            <button
              key={n}
              onClick={() => handleQuizClick(n)}
              className="w-full text-left bg-white/50 p-3 rounded-lg shadow hover:bg-white/70 transition text-sm group"
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#23687D]/10 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#23687D]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {n === 1 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    )}
                    {n === 2 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    )}
                    {n === 3 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    )}
                    {n === 4 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    )}
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-[#23687D] group-hover:text-[#1b505f] transition">
                    {quizResults[n].title}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {quizResults[n].completion}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal per i consigli di benessere */}
      {showModal && quizResult && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-[#23687D]">
                  {quizResult.title}
                </h3>
                <p className="text-sm text-gray-500">{quizResult.completion}</p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mb-5 space-y-4">
              <div className="bg-[#23687D]/10 p-4 rounded-lg border border-[#23687D]/20">
                <h4 className="font-semibold text-[#23687D] mb-2">
                  Consiglio Pratico
                </h4>
                <p className="text-gray-700">{quizResult.tip}</p>
              </div>
              <div className="bg-[#23687D]/10 p-4 rounded-lg border border-[#23687D]/20">
                <h4 className="font-semibold text-[#23687D] mb-2">
                  Benefici Principali
                </h4>
                <p className="text-gray-700">{quizResult.benefit}</p>
              </div>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="w-full py-2.5 bg-[#23687D] text-white rounded-lg hover:bg-[#1b505f] transition font-medium"
            >
              Ho capito!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
