import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const removeContactHandler = (id) => {
        props.removeContactHandler(id)
    }
    const renderContactList = props.contacts.map((each) => {
        return (
            <ContactCard key={each.id} each={each} removeContactHandler={removeContactHandler} />
        );
    });

    return (
        <div className="ui celled list">
        { renderContactList }
        </div>
    );
}

export default  ContactList;