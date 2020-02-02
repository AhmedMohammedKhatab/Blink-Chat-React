import React from 'react';
import './styles/list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'

function List({chats}) {
    return (
      <div className="List">
        <header>
          <h3>Conversations</h3>
          <div>
            <FontAwesomeIcon icon={faComment} color="white" size="1x"/>
          </div>
        </header>
        <div className="chat-heads">
          {
            chats.map(chat => {
              return(
                <div className="chat-head" key={chat.id}>
                  <div className="avatar">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Circle-icons-chat.svg/64px-Circle-icons-chat.svg.png" alt="avatar" />
                  </div>
                  <div className="info">
                    <h4>{chat.type === "group" ? chat.title : chat.user}</h4>
                    <h5>{chat.type === "group" ? chat.user : null}</h5>
                    <p>{chat.last}</p>
                  </div>
                  <div>
                    <p className="date">Sep 12</p>
                    {
                      chat.unseen !== "0" ? (
                        <div className="notification">{chat.unseen}</div>
                      ) : null
                    }
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );  
  }
  
  export default List;