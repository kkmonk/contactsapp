import React,{Component} from 'react';
import PropTypes from 'prop-types';




class ContactsApp extends Component{
    render(){
        return(
            <div>
            <SearchBar/>
            <ContactList contacts={this.props.contacts}/>
            </div>
        );
    }
}

ContactsApp.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
};

class SearchBar extends Component{
    render(){
        return(
            <input type="search" placeholder={"search"}/>
        );
    }
}


class ContactList extends Component{
    render(){
        return(
            <ul>
                {this.props.contacts.map(
                    (contact) =>
                        <ContactItem key={contact.email}
                        name={contact.name}
                        email={contact.email}
                         />
                )}
            </ul>
        );
    }
}

class ContactItem extends Component{
    render(){
        return(
            <li>{this.props.name} -- {this.props.email}</li>
        );
    }
}
ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default ContactsApp;