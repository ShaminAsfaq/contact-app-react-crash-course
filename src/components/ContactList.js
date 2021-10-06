import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
    const inputElement = useRef("");

    const removeContactHandler = (id) => {
        props.removeContactHandler(id)
    }

    const searchHandler = () => {
        props.searchHandler(inputElement.current.value);
    };

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
            <div className="ui search">
                <div className="ui icon input">
                    <input 
                        ref={inputElement}
                        value = { props.searchKey } 
                        onChange={ searchHandler } 
                        className="prompt" 
                        type="text" 
                        placeholder="Search"
                    />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">
            { renderContactList.length > 0 ? renderContactList : 'No contact found.' }
            </div>
        </div>
    );
}

export default  ContactList;