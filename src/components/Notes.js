import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from "../actions/postActions";

class Notes extends Component {
    componentWillMount(){
        this.props.fetchNotes();
    }
    render() {
        const noteItems = this.state.notes.map(note => (
            <div key={note.id}>
                <h3>Title: {note.title}</h3>
                <h3>Note: {note.content}</h3>
            </div>
        ))
        return (
            <div>
                <h1>Notes</h1>
                {noteItems}
            </div>
        )
    }
}

export default connect(null, { fetchNotes })(Notes);