import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
    const removeContactHandler = (id) => {
        props.removeContactHandler(id)
    }
    const renderContactList = props?.contacts?.map((each) => {
        return (
            <ContactCard key={each.id} each={each} removeContactHandler={removeContactHandler} />
        );
    });

    return (
        <div className="main">
            <h2>Contact List
                <Link to="/add">
                    <button style={{float: 'right'}} className="ui blue button right">Add Contact</button>
                </Link>
            </h2>
            <div className="ui celled list">
            { renderContactList }
            </div>
        </div>
    );
}

export default  ContactList;