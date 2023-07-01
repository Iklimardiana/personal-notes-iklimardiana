import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteSearch from "./NoteSearch";

function Body({ addNote, notes, onDelete, searchNote, inputSearch, onArchive, onActive }) {
  const notesActive = notes.filter((note) => note.archived === false && note.title.toLowerCase().includes(inputSearch.toLowerCase().trim()));
  const noteArchive = notes.filter((note) => note.archived === true && note.title.toLowerCase().includes(inputSearch.toLowerCase().trim()));

  return (
    <div className="note-app__body">
      <NoteSearch searchNote={searchNote} />
      <NoteInput addNote={addNote} />
      <h2>Active Notes</h2>
      <NoteList notes={notesActive} onDelete={onDelete} onArchive={onArchive}/>
      <h2>Archived Notes</h2>
      <NoteList notes={noteArchive} onDelete={onDelete} onActive={onActive}/>
    </div>
  );
}

export default Body;
