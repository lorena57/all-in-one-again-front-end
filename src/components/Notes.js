import React from 'react'
// import { connect } from 'react-redux';

const Notes = (props) => {
 
    return (
        <div>
            <h1>Groceries</h1>
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

// export default connect(null, )(Notes);
export default Notes;