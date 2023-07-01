import React from "react";

function NoteItemBody({ title, createdAt, body}) {
    return (
        <div className="note-item__content">
            <h3 className="note-item__title">{title}</h3>
            <span className="note-item__date">{createdAt}</span>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

export default NoteItemBody;