import { useState } from 'react';
import PropTypes from 'prop-types';

import './nav.css'

function UserNav() {
{/* User information nav bar across the top */}
return (
    <nav id="user-nav">
        <input type="text" name="app-search" id="app-search" />
        <img src="/user.png" alt="User Info" className='mainNavIcon'/>
        <img src="/notification-mailbox.png" alt="Notifications" className='mainNavIcon'/>
    </nav>)
}

function MessageList({ isVisible }) {
    const messageListClass = isVisible ? '' : 'hidden';

    return (
        <div id="message-list" className={messageListClass}>
            Messaging
            <input type="text" name="message-search" id="message-search" />
            <div id="all-messages">
                <div className="test-message">
                    <h4>Test User</h4>
                    <p>Hello, this is a test message.</p>
                </div>
                <div className="test-message">
                    <h4>Test User</h4>
                    <p>Hello, this is a test message.</p>
                </div>
                <div className="test-message">
                    <h4>Test User</h4>
                    <p>Hello, this is a test message.</p>
                </div>
                <div className="test-message">
                    <h4>Test User</h4>
                    <p>Hello, this is a test message.</p>
                </div>
            </div>
        </div>
    );
}

MessageList.propTypes = {
    isVisible: PropTypes.bool.isRequired
}


function PostboxList({ isVisible }) {
    const PostboxListClass = isVisible ? '' : 'hidden';
    
    return (
        <div id="conversation-list" className={PostboxListClass}>
            Postboxes
            <input type="text" name="conversation-search" id="conversation-search" />
            <div id="all-messages">
                <div className="test-postbox">
                    <h4>Test Postbox Name</h4>
                    <h6>Name1, Name2, Name3, etc.</h6>
                    <p>Hello, this is a test message.</p>
                    <p>And this is a test reply.</p>
                </div>
                <div className="test-postbox">
                    <h4>Test Postbox Name</h4>
                    <h6>Name1, Name2, Name3, etc.</h6>
                    <p>Hello, this is a test message.</p>
                    <p>And this is a test reply.</p>
                </div>
                <div className="test-postbox">
                    <h4>Test Postbox Name</h4>
                    <h6>Name1, Name2, Name3, etc.</h6>
                    <p>Hello, this is a test message.</p>
                    <p>And this is a test reply.</p>
                </div>
                <div className="test-postbox">
                    <h4>Test Postbox Name</h4>
                    <h6>Name1, Name2, Name3, etc.</h6>
                    <p>Hello, this is a test message.</p>
                    <p>And this is a test reply.</p>
                </div>
                <div className="test-postbox">
                    <h4>Test Postbox Name</h4>
                    <h6>Name1, Name2, Name3, etc.</h6>
                    <p>Hello, this is a test message.</p>
                    <p>And this is a test reply.</p>
                </div>
            </div>
        </div>
    );
}

PostboxList.propTypes = {
    isVisible: PropTypes.bool.isRequired
}

function SiteNav() {
    // State to track visibility of message list
    const [showMessages, setShowMessages] = useState(false);

    // Function to toggle visibility
    const toggleMessages = () => {
        setShowMessages(!showMessages);
        if (showPostboxes) {
            setShowPostboxes(false);
        }
    };

    const [showPostboxes, setShowPostboxes] = useState(false);

    const toggleShowPostboxes = () => {
        setShowPostboxes(!showPostboxes);
        if (showMessages) {
            setShowMessages(false);
        }
    }


{/* Settings and directory nav bar on the left side from top to bottom */}
return (
    <div>
        <nav id="site-nav">
            <img src="" alt="PenPals Logo" id='app-logo'/>
            <button id="messages" onClick={toggleMessages}> 
                <img src="/message.png" alt="Messages" id='messages-icon' className='sideNavIcon'/> 
            </button>
            <button id="postboxes" onClick={toggleShowPostboxes}> 
                <img src="/group-communication.png" alt="Conversations" className='sideNavIcon'/>
            </button>
            <button id="settings">
                <img src="/setting.png" alt="Settings" className='sideNavIcon'/>
            </button>
        </nav>
        <MessageList isVisible={showMessages} />
        <PostboxList  isVisible={showPostboxes}/>
    </div>)
}


export {
    UserNav,
    SiteNav
}