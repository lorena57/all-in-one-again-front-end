import React, { Component } from 'react'

class Notes extends Component {
 
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

export default Notes