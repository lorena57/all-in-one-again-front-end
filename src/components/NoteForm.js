import React, { Component } from 'react'

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const newNote = {
            title: this.state.title,
            content: this.state.content
        };

        fetch('http://localhost:3000/api/v1/notes', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newNote)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label>
                        <br/>
                        <input type="text" name='title' onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <br/>
                    <div>
                        <label>Notes:</label><br />
                        <textarea cols="30" rows="10" name='content' onChange={this.onChange} value={this.state.content}></textarea>
                    </div>
                    <br/>
                    <button type='submit'>Submit</button>

                </form>
            </div>
        )
    }
}

export default NoteForm;