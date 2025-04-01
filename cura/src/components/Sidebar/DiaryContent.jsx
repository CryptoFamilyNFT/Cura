import { useState } from "react";

export default function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [showFullNote, setShowFullNote] = useState(false);

  const addNote = () => {
    if (newNote.trim() !== "") {
      const timestamp = new Date().toLocaleString("it-IT", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: undefined,
        hour12: false,
      });
      setNotes([...notes, { text: newNote, timestamp }]);
      setNewNote("");
      setIsEditing(false);
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const editNote = (index) => {
    setNewNote(notes[index].text);
    setIsEditing(true);
  };

  const saveEdit = () => {
    const updatedNotes = [...notes];
    updatedNotes[notes.length - 1].text = newNote; // Assume edit is on the last note
    setNotes(updatedNotes);
    setNewNote("");
    setIsEditing(false);
  };

  return (
    <div className="flex h-full space-x-6">
      <div className="p-4 space-y-4 bg-white/30 rounded-lg shadow-2xl w-2/3">
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Scrivi una nuova nota..."
          className="w-full shadow-md h-40 p-2 border bg-white/50 border-gray-300 rounded"
        />
        {isEditing ? (
          <button
            onClick={saveEdit}
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            Salva Modifica
          </button>
        ) : (
          <button
            onClick={addNote}
            className="w-full p-2 bg-[#23687D] text-white rounded"
          >
            Aggiungi Nota
          </button>
        )}
        <div
          className="mt-4 max-h-[50vh] overflow-y-auto"
          style={{ overflowY: "scroll" }}
        >
          {notes.length > 0 ? (
            notes.map((note, index) => (
              <div key={index} className="p-4 border-b border-gray-300">
                <p>
                  {showFullNote
                    ? note.text
                    : note.text.length > 100
                    ? note.text.slice(0, 100) + "..."
                    : note.text}
                </p>
                {note.text.length > 100 && (
                  <button
                    onClick={() => setShowFullNote(!showFullNote)}
                    className="mt-2 text-blue-500 underline"
                  >
                    {showFullNote ? "Nascondi" : "Visualizza"}
                  </button>
                )}
                <p className="text-sm text-gray-500 mt-2">{note.timestamp}</p>
                <div className="flex justify-between mt-2">
                  <button
                    onClick={() => editNote(index)}
                    className="p-2 border border-blue-500 text-blue-500 rounded"
                  >
                    Modifica
                  </button>
                  <button
                    onClick={() => deleteNote(index)}
                    className="p-2 border border-red-500 text-red-500 rounded"
                  >
                    Elimina
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Nessuna nota disponibile.</p>
          )}
        </div>
      </div>

      <div className="w-1/3 bg-white/30 p-6 rounded-lg shadow-2xl">
        <h2 className="text-xl font-semibold">Achievements</h2>
        <div className="mt-6 space-y-4">
          <div className="bg-white/50 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Achievement 1</h3>
            <p>Completa la prima nota nel diario.</p>
          </div>
          <div className="bg-white/50 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Achievement 2</h3>
            <p>Scrivi 5 note consecutive.</p>
          </div>
          <div className="bg-white/50 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Achievement 3</h3>
            <p>Condividi una nota con un amico.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
