import { useState } from "react";

export default function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [showFullNote, setShowFullNote] = useState(false);
  const [modalNote, setModalNote] = useState(null);

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

  const deleteNote = (index) => setNotes(notes.filter((_, i) => i !== index));

  const editNote = (index) => {
    setNewNote(notes[index].text);
    setIsEditing(true);
  };

  const saveEdit = () => {
    const updatedNotes = [...notes];
    updatedNotes[notes.length - 1].text = newNote;
    setNotes(updatedNotes);
    setNewNote("");
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full gap-6">
      {/* Note */}
      <div className="flex-1 p-4 space-y-4 bg-white/30 rounded-2xl shadow-2xl backdrop-blur-md">
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Scrivi una nuova nota..."
          className="w-full h-40 p-3 rounded-lg bg-white/50 border border-gray-300 shadow-inner resize-none"
        />
        <button
          onClick={isEditing ? saveEdit : addNote}
          className={`w-full p-2 rounded-lg text-white font-semibold transition ${
            isEditing
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-[#23687D] hover:bg-[#1c5668]"
          }`}
        >
          {isEditing ? "Salva Modifica" : "Aggiungi Nota"}
        </button>

        <div className="mt-6 max-h-[50vh] overflow-y-auto space-y-4 pr-2">
          {notes.length > 0 ? (
            notes.map((note, index) => (
              <div
                key={index}
                className="p-4 bg-white/60 rounded-xl shadow-md backdrop-blur-sm"
              >
                <p className="text-gray-800">
                  {showFullNote || note.text.length <= 100
                    ? note.text
                    : `${note.text.slice(0, 100)}...`}
                </p>
                {note.text.length > 100 && (
                  <button
                    onClick={() => setShowFullNote(!showFullNote)}
                    className="text-sm mt-2 text-blue-600 hover:underline"
                  >
                    {showFullNote ? "Nascondi" : "Visualizza"}
                  </button>
                )}
                <p className="text-xs text-gray-500 mt-2">{note.timestamp}</p>
                <div className="flex justify-between mt-3">
                  <button
                    onClick={() => editNote(index)}
                    className="px-3 py-1 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-100"
                  >
                    Modifica
                  </button>
                  <button
                    onClick={() => deleteNote(index)}
                    className="px-3 py-1 border border-red-500 text-red-500 rounded-md hover:bg-red-100"
                  >
                    Elimina
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-700">Nessuna nota disponibile.</p>
          )}
        </div>
      </div>

      {/* Achievements */}
      <div className="w-full lg:max-w-sm p-4 bg-white/30 rounded-2xl shadow-2xl space-y-4 backdrop-blur-md">
        <h2 className="text-xl font-bold text-gray-800">Achievements</h2>
        <div className="space-y-3">
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              onClick={() => setModalNote(`Risultato quiz ${n}`)}
              className="w-full text-left bg-white/50 p-4 rounded-xl shadow-inner hover:bg-white/70"
            >
              <h3 className="font-semibold">Achievement {n}</h3>
              <p className="text-sm">Clicca per vedere il risultato.</p>
            </button>
          ))}
        </div>
        {modalNote && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 shadow-2xl w-[90%] max-w-md">
              <h2 className="text-xl font-bold mb-4">Risultato Quiz</h2>
              <p>{modalNote}</p>
              <button
                onClick={() => setModalNote(null)}
                className="mt-6 w-full bg-[#23687D] hover:bg-[#1c5668] text-white p-2 rounded"
              >
                Chiudi
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
