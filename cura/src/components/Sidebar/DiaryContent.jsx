import { useState } from "react";

export default function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
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
      setCurrentIndex(notes.length);
      setIsEditing(false);
    }
  };

  const goToNote = (index) => {
    setCurrentIndex(index);
    setIsEditing(false);
    setShowFullNote(false);
  };

  const nextNote = () => {
    if (currentIndex < notes.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsEditing(false);
      setShowFullNote(false);
    }
  };

  const prevNote = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsEditing(false);
      setShowFullNote(false);
    }
  };

  const deleteNote = () => {
    const updatedNotes = notes.filter((_, index) => index !== currentIndex);
    setNotes(updatedNotes);
    setCurrentIndex(Math.max(0, currentIndex - 1));
    setIsEditing(false);
  };

  const editNote = () => {
    setNewNote(notes[currentIndex].text);
    setIsEditing(true);
  };

  const saveEdit = () => {
    const updatedNotes = [...notes];
    updatedNotes[currentIndex].text = newNote;
    setNotes(updatedNotes);
    setNewNote("");
    setIsEditing(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4 bg-white/30 rounded-lg shadow-2xl">
      <textarea
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Scrivi una nuova nota..."
        className="w-full h-50 p-2 border bg-white border-gray-300 rounded"
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
      {notes.length > 0 && (
        <div className="p-4 text-center border border-gray-300 rounded max-h-[50vh] overflow-y-auto">
          <p>
            {showFullNote
              ? notes[currentIndex].text
              : notes[currentIndex].text.length > 100
              ? notes[currentIndex].text.slice(0, 100) + "..."
              : notes[currentIndex].text}
          </p>
          {notes[currentIndex].text.length > 100 && (
            <button
              onClick={() => setShowFullNote(!showFullNote)}
              className="mt-2 text-blue-500 underline"
            >
              {showFullNote ? "Nascondi" : "Visualizza"}
            </button>
          )}
          <p className="text-sm text-gray-500 mt-2">
            {notes[currentIndex].timestamp}
          </p>
          <div className="flex justify-between mt-2">
            <button
              onClick={editNote}
              className="p-2 border border-blue-500 text-blue-500 rounded"
            >
              Modifica
            </button>
            <button
              onClick={deleteNote}
              className="p-2 border border-red-500 text-red-500 rounded"
            >
              Elimina
            </button>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center mt-2">
        <button
          onClick={prevNote}
          disabled={currentIndex === 0}
          className="p-2 border border-gray-300 rounded"
        >
          ← Precedente
        </button>
        <div className="flex space-x-2">
          {notes
            .slice(
              Math.max(0, currentIndex - 1),
              Math.min(notes.length, currentIndex + 2)
            )
            .map((_, index) => {
              const realIndex = Math.max(0, currentIndex - 1) + index;
              return (
                <button
                  key={realIndex}
                  onClick={() => goToNote(realIndex)}
                  className={`p-2 border ${
                    realIndex === currentIndex
                      ? "bg-blue-500 text-white"
                      : "bg-white"
                  }`}
                >
                  {realIndex + 1}
                </button>
              );
            })}
        </div>
        <button
          onClick={nextNote}
          disabled={currentIndex === notes.length - 1}
          className="p-2 border border-gray-300 rounded"
        >
          Successivo →
        </button>
      </div>
    </div>
  );
}
