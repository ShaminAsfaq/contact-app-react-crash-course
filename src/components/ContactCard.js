import React from "react";
import secondMaleImage from '../images/second-male.png';

const ContactCard = (props) => {
    const { id, name, email } = props.each;
    return (
        <div className="item">
            <div className="right floated content">
                <div onClick={ () => props.removeContactHandler(id)} className="ui button">
                    <i className="trash alternate outline icon"></i>
                    Delete
                </div>
            </div>
            <img className="ui avatar image" src={ secondMaleImage } alt="usr"/>
            <div className="content">
                <div className="header">{ name }</div>
                <div>{ email }</div>
            </div>
        </div>
    );
}

export default ContactCard;