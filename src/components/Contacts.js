import React, { Component } from 'react'

 class Contacts extends Component {

    render() {
        const contactItems = this.state.contacts.map(contact => (
            <div key={contact.id}>
                <h3>First Name: {contact.first_name}</h3>
                <h3>Last Name: {contact.last_name}</h3>
                <h3>Email Address: {contact.email_address}</h3>
                <h3>Contact Number: {contact.phone_number}</h3>
            </div>
        ))
        return (
            <div>
                <h1>Contact</h1>
                {contactItems}
            </div>
        )
    }
}

export default Contacts;
