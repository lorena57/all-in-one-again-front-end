import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNotes } from "../actions/noteActions";
// import { Link } from 'react-router-dom';
// import Grocery from '../components/Grocery';
import Notes from '../components/Notes';

class NotesContainer extends Component {
    componentDidMount() {
        this.props.fetchNotes();
    }
    render() {
        return (
            <div>
                <Route exact path='/notes' render={(routerProps) => <Notes {...routerProps} notes={this.props.notes} />} />

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        notes: state.notes
    };
}

export default connect(mapStateToProps, { fetchNotes })(NotesContainer);
