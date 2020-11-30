import React, { Component } from 'react'

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Title:</label>
                        <br/>
                        <input type="text" name='title'/>
                    </div>
                    <div>
                        <label>Notes:</label><br />
                        <textarea cols="30" rows="10" name='content'></textarea>
                    </div>
                    <br/>
                    <button type='submit'>Submit</button>

                </form>
            </div>
        )
    }
}

export default NoteForm;
