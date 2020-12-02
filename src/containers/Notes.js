import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from "../actions/noteActions";
import Note from '../components/Note';

class Notes extends Component {
    componentWillMount(){
        this.props.fetchNotes();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newNote) {
            this.props.notes.unshift(nextProps.newNote);
        }
    }

    render() {

        return (
            <div>
                <section>
                    {
                        this.props.notes.map((note) => {
                            return (
                                <Note key={note.id}
                                note={note}
                                />
                            );
                        })
                    }   
                </section>
            </div>
        )
        // const noteItems = this.props.notes.map(note => (
        //     <div key={note.id}>
        //         <h3>Title: {note.title}</h3>
        //         <h3>Note: {note.content}</h3>
        //     </div>
        // ))
        // return (
        //     <div>
        //         <h1>Notes</h1>

        //         {noteItems}
        //     </div>
        // )


    }
}

//mapStateToProps gets the state and maps the properties to the component
const mapStateToProps = state => ({
    notes: state.notes.notes,
    newNote: state.notes.note
});

export default connect(mapStateToProps, { fetchNotes })(Notes);