import React from 'react'
import NoteRating from '../reducers/NoteRating'

const Notes = (props) => {
 
    return (
        <div>
            <h1>Notes</h1>
            {props.notes.map((note ,index) =>
                <div key={index.id}>
              
                    Title: {note.title}
                    <br/>
                    Note: {note.content}
                    <NoteRating/>
                </div>
            )}
        </div>
    )
}

export default Notes;