import React from "react";
import secondMaleImage from '../images/second-male.png';
import { Link } from "react-router-dom";

const ContactDetails = (props) => {
    const { name, email } = props.location.state.contact;
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={secondMaleImage} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{ name }</div>
                    <div className="description">{ email }</div>
                </div>
            </div>
            <div style={{textAlign: 'center'}} className="center-div">
                <Link to={"/"}>
                    <button className="ui button blue center">Back to Contact List</button>
                </Link>
            </div>
        </div>
    );
}

export default ContactDetails;