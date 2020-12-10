import React from 'react'

const Notes = (props) => {
 
    return (
        <div>
            <h1>Notes</h1>
            {props.notes.map((note ,index) =>
                <div key={index.id}>
              
                    Title: {note.title}
                    <br/>
                    Note: {note.content}
                </div>
            )}
        </div>
    )
}

export default Notes;