import React, { Component } from 'react'

 class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <h1>Add Contact</h1>
                <form>
                    <div>
                        <label>First Name:</label><br/>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Last Name:</label><br />
                        <input type="text" />
                    </div>
                    <div>
                        <label>Email Address:</label><br />
                        <input type="text" />
                    </div>
                    <div>
                        <label>Contact Number:</label><br />
                        <input type="text" />
                    </div>
                    <div>
                        <button type='submit'>Add Contact</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default ContactForm;
