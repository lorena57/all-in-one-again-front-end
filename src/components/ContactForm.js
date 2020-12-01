import React, { Component } from 'react'

 class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            number: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const contact = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        number: this.state.number
        }
        fetch('http://localhost:3000/api/v1/contacts', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(contact)
        })
        .then(res => res.json()
        .then(data => console.log(data)))
    }





    render() {
        return (
            <div>
                <h1>Add Contact</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>First Name:</label><br/>
                        <input type="text" onChange={this.onChange} name='first_name' value={this.state.first_name} />
                    </div>
                    <br />
                    <div>
                        <label>Last Name:</label><br />
                        <input type="text" onChange={this.onChange} name='last_name' value={this.state.last_name} />
                        
                    </div>
                    <br />
                    <div>
                        <label>Email Address:</label><br />
                        <input type="text" onChange={this.onChange} name='email' value={this.state.email} />
                    </div>
                    <br />
                    <div>
                        <label>Contact Number:</label><br />
                        <input type="text" onChange={this.onChange} name='number' value={this.state.number} />
                        <br />
                    </div>
                    <br />
                    <div>
                        <button type='submit'>Add Contact</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default ContactForm;
