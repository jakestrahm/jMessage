import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useMessages } from '../../hooks/useMessages';
// TODO wrap long messages.

function MessageList({ roomId }) {
    const containerRef = React.useRef(null);
    const { user } = useAuth();
    const messages = useMessages(roomId);

    React.useLayoutEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    });

    return (
        <div ref={containerRef} className="bg-[#ffffff] p-4">
            <ul className="">
                {messages.map((x) => (
                    <Message
                        key={x.id}
                        message={x}
                        isOwnMessage={x.uid === user.uid}
                    />
                ))}
            </ul>
        </div >
    );
}

function Message({ message, isOwnMessage }) {
    const { displayName, text } = message;

    return (
        <li className={['chat', isOwnMessage == true ? 'chat-end' : 'chat-start'].join(' ')}>
            <h4 className="chat-header">{isOwnMessage ? 'You' : displayName}</h4>
            <div className={['break-words', 'chat-bubble', isOwnMessage ? 'outgoing-message' : 'incoming-message'].join(' ')}>{text}</div>
        </li>
    );
}

export { MessageList };
