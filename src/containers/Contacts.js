import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchContacts, setUser} from "../actions/contactActions";

 class Contacts extends Component {
    componentWillMount(){
        this.props.fetchContacts();
    }

     handleOnClick = userId => {
         this.props.setUser(userId);
     }

    render() {

        const contacts = this.props.contacts;
        let renderList = 'No Users';

        if (contacts) {
            renderList = contacts.map(list => {
                return (<a href="#/" onClick={() => this.handleOnClick(list.id)} key={list.id}><br/>{list.first_name}<br/></a>)
            })
        }

        const currentUser = this.props.currentUser;
        let userDetails = 'No User Selected';
        if (currentUser) {
            userDetails = `Hi, my name is ${currentUser.first_name}`;
        }

        const contactItems = this.props.contacts.map(contact => (
            <div key={contact.id}>
                <h3>First Name: {contact.first_name}</h3>
                <h3>Last Name: {contact.last_name}</h3>
                <h3>Email Address: {contact.email_address}</h3>
                <h3>Contact Number: {contact.phone_number}</h3>            
            </div>
        ))
        return (
            
            <div className="contact_container">
                <div >
                    {renderList}
                    <br/>
                </div>

                <div>
                    <div>
                        {userDetails}
                    </div>
                </div>

                <div>  
                    <h1>Contact</h1>
                    <div>{contactItems}</div>
                
                </div>
              
            </div>
        )
    }
}

const mapStateToProps = state => ({
    contacts: state.contacts.contacts,
    newContact: state.contacts.contact,
    currentUser: state.contacts.userId ? state.contacts.contacts.filter(user => user.id === state.contacts.userId)[0] : null
});

export default connect(mapStateToProps, { fetchContacts, setUser })(Contacts);