import React from 'react';
import './styles/navbar.css';
import List from './list'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUserFriends, faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'

function Nav({chats}) {
    function showList() {
        document.querySelector('.nav-list').style.display = 'block'
    }
    function hideList() {
        document.querySelector('.nav-list').style.display = 'none'
    }
    return (
      <div className="Nav">
        <div className="nav-list" onClick={hideList}>
            <List chats={chats}/>
        </div>
        <h3>Mom's Discharge Plan</h3>
        <ul>
            <li className="friends" onClick={showList}>
                <FontAwesomeIcon icon={faComment} size="1x" />
            </li>
            <li>
                <FontAwesomeIcon icon={faUserFriends} size="1x" />
            </li>
            <li>
                <FontAwesomeIcon icon={faFilter} size="1x" />
            </li>
            <li>
                <FontAwesomeIcon icon={faSearch} size="1x" />
            </li>
        </ul>
      </div>
    );
  }
  
  export default Nav;