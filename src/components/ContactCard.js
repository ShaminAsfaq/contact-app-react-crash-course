import React from "react";
import secondMaleImage from '../images/second-male.png';
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    const { id, name, email } = props.each;
    return (
        <div className="item">
            <div className="right floated content">
                <div style={{color:'red'}} onClick={ () => props.removeContactHandler(id)} className="ui button">
                    <i className="trash alternate outline icon"></i>
                    Delete
                </div>
            </div>

            <Link to={{ pathname: `/edit`, state: { contact: props.each } }}>
                <div className="right floated content">
                    <div style={{color:'blue'}} className="ui button">
                        <i className="edit alternate outline icon"></i>
                        Edit
                    </div>
                </div>
            </Link>
            <img className="ui avatar image" src={ secondMaleImage } alt="usr"/>
            <div className="content">
                <Link to={{ pathname: `/contact/${id}`, state: { contact: props.each } }}>
                    <div className="header">{ name }</div>
                    <div>{ email }</div>
                </Link>
            </div>
        </div>
    );
}

export default ContactCard;