import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            maxCharacter: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onbodyChangeHandler = this.onbodyChangeHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const input = event.target.value.slice(0, this.state.maxCharacter);
        this.setState({
            title: input
        });
    }

    onbodyChangeHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);

        this.setState(() => {
            return {
                title: '',
                body: '',
            }
        })
    }

    render() {
        return (
            <div className="note-input">
                <h2>Add Note</h2>
                <form onSubmit={this.onSubmitEventHandler} required>
                    <div className="note-input__title__char-limit">
                        <p>Characters remaining: {this.state.maxCharacter - this.state.title.length}</p>
                    </div>
                    <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} required/>
                    <textarea id="height" type="text" placeholder="body" value={this.state.body} onChange={this.onbodyChangeHandler} required></textarea>
                    <button type="submit">Submit Note</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;