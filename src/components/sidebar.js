import React from 'react';
import './styles/sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faUser, faSun } from '@fortawesome/free-regular-svg-icons'

function SideBar() {
    return (
      <div className="SideBar">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Circle-icons-chat.svg/64px-Circle-icons-chat.svg.png" className="logo" alt="logo"></img>
        <ul>
            <li className="active">
                <FontAwesomeIcon icon={faComments} color="white" size="2x"/>
            </li>
            <li>
                <FontAwesomeIcon icon={faUser} color="white" size="2x"/>
            </li>
            <li>
                <FontAwesomeIcon icon={faSun} color="white" size="2x"/>
            </li>
        </ul>
      </div>
    );
  }
  
  export default SideBar;