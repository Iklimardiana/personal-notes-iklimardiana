import React from "react";
import Body from "./Body";
import { getInitialData } from "../utils/data";
import Header from "./Header";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    const notes = getInitialData();

    this.state = {
      notes: notes,
      inputSearch: '',
    };

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    this.onActiveEventHandler = this.onActiveEventHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onDeleteEventHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteEventHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onArchiveEventHandler(id) {
    this.setState({
      notes: this.state.notes.map((note) =>
        note.id === id ? { ...note, archived: true } : note
      ),
    });
  }

  onActiveEventHandler(id) {
    this.setState({
      notes: this.state.notes.map((note) =>
        note.id === id ? { ...note, archived: false } : note
      ),
    });
  }

  onSearchEventHandler({ search }) {
    this.setState(() => {
      return { inputSearch: search };
    });
  }

  render() {
    return (
      <>
        <Header />
        <Body
          searchNote={this.onSearchEventHandler}
          addNote={this.onAddNoteEventHandler}
          notes={this.state.notes}
          inputSearch={this.state.inputSearch}
          onDelete={this.onDeleteEventHandler}
          onArchive={this.onArchiveEventHandler}
          onActive={this.onActiveEventHandler}
        />
      </>
    );
  }
}

export default NoteApp;
