import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = ({ headerText }) => {
    //add_user_name
    return (
        <div className="header">
            <span className="greetings">{headerText}</span>
            <ul>
                <li className="nav"><Link to="/app ">Home</Link></li>
                <li className="nav"><Link to="/devices">Devices</Link></li>
                <li className="nav"><Link className="deviceLink" to="/index">Profile</Link></li>
            </ul>
            <button className="menu-button">&#9776;</button>
        </div>

    )
}

export default Header;