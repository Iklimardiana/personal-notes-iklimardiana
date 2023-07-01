import React from "react";
import NoteItemBody from "./NoteItemBody";
import { showFormattedDate } from "../utils/data";
import DeleteButton from './DeleteButton';
import ArchiveButton from "./ArchiveButton";
import ActiveButton from "./ActiveButton";

function NoteItem({ title, createdAt, body, id, archived, onDelete, onArchive, onActive }) {
    return (
        <div className="note-item">
            <NoteItemBody title={title} createdAt={showFormattedDate(createdAt)} body={body}/>
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete}/>
                {
                    archived ? <ActiveButton id={id} onActive={onActive} /> : <ArchiveButton id={id} onArchive={onArchive} />
                }
            </div>
        </div>
    );
}

export default NoteItem;