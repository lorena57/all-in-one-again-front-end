import React, { Component } from 'react'
import { connect } from "react-redux";
import { createContact } from "../actions/contactActions";


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
        email_address: this.state.email_address,
        phone_number: this.state.phone_number
        }
        this.props.createContact(contact)
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
                        <input type="text" onChange={this.onChange} name='email_address' value={this.state.email_address} />
                    </div>
                    <br />
                    <div>
                        <label>Contact Number:</label><br />
                        <input type="text" onChange={this.onChange} name='phone_number' value={this.state.phone_number} />
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

export default connect(null, { createContact })(ContactForm) ;
