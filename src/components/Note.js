import React from 'react'

const Note = ({note}) => {
    return (
        <div>
            <p key={note.id}></p>
            {/* <p>{note.id}</p> */}
            <p>{note.title}</p>
            <p>{note.content}</p>

        </div>
    )
}

export default Note;
