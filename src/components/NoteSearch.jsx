import React from "react";

class NoteSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = { search: '' };

        this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
    }

    onSearchChangeEventHandler(event) {
        this.setState({ search: event.target.value }, () => {
            return this.props.searchNote(this.state)
        });
    }

    render() {
        return (
            <div className="note-input">
                <input type="text" placeholder="search" value={this.state.search} onChange={this.onSearchChangeEventHandler}/>
            </div>
        );
    }
}

export default NoteSearch;