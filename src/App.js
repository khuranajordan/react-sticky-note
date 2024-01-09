import { useEffect, useState } from "react";
import "./App.css";
import StickyNote from "./components/StickyNote";
import { FaPlus } from "react-icons/fa";

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState(1);

  useEffect(() => {
    console.log({ notes });
  }, [notes]);

  function addNote() {
    setNote((prevNote) => prevNote + 1);

    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: Date.now(),
        zIndex: prevNotes.length + 1,
      },
    ]);
  }

  function removeNote(noteId) {
    setNotes((prevNotes) => prevNotes.filter((item) => item.id !== noteId));
  }

  function handleNoteDragEnd(index) {
    const updatedNotes = notes.map((item) => {
      if (item.id === notes[index].id) {
        return { ...item, zIndex: item.zIndex + 1 || notes.length + 1 };
      }
      return item;
    });

    setNotes(updatedNotes);
  }

  function handleNoteDrag(index) {
    const updatedNotes = notes.map((item) => {
      if (item.id === notes[index].id) {
        return { ...item, zIndex: notes.length + 1 };
      }
      return item;
    });

    setNotes(updatedNotes);
  }

  return (
    <div className="App">
      <button className="sticky-btn" onClick={addNote}>
        <FaPlus />
      </button>
      {notes.map((item, index) => (
        <StickyNote
          key={item.id}
          onClose={() => removeNote(item.id)}
          noteNumber={note}
          zIndex={item.zIndex}
          onDrag={() => handleNoteDrag(index)}
          onDragEnd={() => handleNoteDragEnd(index)}
        />
      ))}
    </div>
  );
}

export default App;
