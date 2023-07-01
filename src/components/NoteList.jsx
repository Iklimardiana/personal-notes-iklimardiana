import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onActive, onArchive }) {
    if(notes.length === 0) {
        return (
            <div className="notes-list__empty-message">
                <h3>Tidak ada catatan</h3>
            </div>
        )
    }

    return (
        <div className="notes-list">
            {
                notes.map((note) => (
                    <NoteItem 
                    key={note.id}
                    {...note}
                    onDelete={onDelete}
                    onActive={onActive}
                    onArchive={onArchive} />
                ))
            }
        </div>
    );
}

export default NoteList;