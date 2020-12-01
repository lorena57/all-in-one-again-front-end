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
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }



    render() {
        return (
            <div>
                <h1>Add Contact</h1>
                <form>
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
