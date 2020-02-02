import React from 'react';
import './styles/box.css';
import Nav from './navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPlusCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Box({chats}) {
    return (
      <div className="Box">
        <Nav chats={chats}/>
        <div className="chat-box">
          <div className="sender">
            <div className="bubble-right">
              <h3> Lorem ipsum dolor sit amet </h3>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
              </p>
              <div className="extra">
                <button className="done">
                  <FontAwesomeIcon icon={faCheck} color="pink" size="1x" className="check"/>
                  done
                </button>
                <div>
                  John Doe 12:30p <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Circle-icons-chat.svg/64px-Circle-icons-chat.svg.png" className="sender-avatar" alt="sender"/>
                </div>
              </div>
            </div>
            <div className="meta">
              <p>John Doe</p>
              <div>
                12:30p <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Circle-icons-chat.svg/64px-Circle-icons-chat.svg.png" className="sender-avatar" alt="sender"/>
              </div>
            </div>
          </div>
          <div className="clear"></div>
          <div className="reciever">
            <div className="bubble-left">
              <h3> Lorem ipsum dolor sit amet </h3>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="meta">
              <p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Circle-icons-chat.svg/64px-Circle-icons-chat.svg.png" className="sender-avatar" alt="sender"/>
                Jane Doe
              </p>
              <div>
                12:30p
              </div>
            </div>
          </div>
          <div className="reciever">
            <div className="bubble-left">
              <h3> Lorem ipsum dolor sit amet </h3>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="meta">
              <p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Circle-icons-chat.svg/64px-Circle-icons-chat.svg.png" className="sender-avatar" alt="sender"/>
                Jane Doe
              </p>
              <div>
                12:30p
              </div>
            </div>
          </div>
          <div className="sender">
            <div className="bubble-right">
              <h3> Lorem ipsum dolor sit amet </h3>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
              </p>
              <div className="extra">
                <button className="done">
                  <FontAwesomeIcon icon={faCheck} color="pink" size="1x"/>
                  done
                </button>
                <div>
                  John Doe 12:30p <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Circle-icons-chat.svg/64px-Circle-icons-chat.svg.png" className="sender-avatar" alt="sender"/>
                </div>
              </div>
            </div>
            <div className="meta">
              <p>John Doe</p>
              <div>
                12:30p <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Circle-icons-chat.svg/64px-Circle-icons-chat.svg.png" className="sender-avatar" alt="sender"/>
              </div>
            </div>
          </div>
        </div>
        <div className="actions">
          <div className="plus">
            <FontAwesomeIcon icon={faPlusCircle} color="white" size="2x"/>
          </div>
          <div>
            <textarea rows="1"></textarea>
          </div>
          <div>
            <FontAwesomeIcon icon={faPaperPlane} color="blue" size="2x"/>
          </div>
        </div>
      </div>
    );
  }
  
  export default Box;