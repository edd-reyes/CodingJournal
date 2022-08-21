import React, { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
/*     { id: nanoid(), text: "First Note!", date: "15/04/22" },
    { id: nanoid(), text: "Second Note!", date: "16/04/22" },
    { id: nanoid(), text: "Third Note!", date: "17/04/22" }, */
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className="container">
      <Header/>
      <div className="allNotes">      
        <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
      </div>

    </div>
  );
};

export default App;
