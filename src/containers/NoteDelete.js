import React, { Component } from 'react'
import NoteUpdate from '../components/NoteUpdate';


class NoteDelete extends Component {
    render() {
        return (
            <div>
                {
                    this.props.notes.map((note) => {
                        return (
                            <NoteUpdate key={note.id}
                                notes={note}
                                // onEdit={this.handleEdit}
                                // onDelete={this.props.onDelete}
                            />
                        );
                    })
                }    
            </div>
        )
    }
}

export default NoteDelete;
